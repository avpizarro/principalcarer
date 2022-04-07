import { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from 'cloudinary-react';
import API from "../../utils/API";
import DeletePhoto from "../DeletePhoto";
import SearchImage from "../SearchImage";

const FileUpload = () =>
{
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const [uploadedFile, setUploadedFile] = useState("");
  const [uploadedFileId, setUploadedFileId] = useState("");
  const [childrenHelp, setChildrenHelp] = useState("");

  async function loadImage()
  {
    API.getHomeImages()
      .then((res) =>
      {
        console.log(res);
        const image = res.data.map((item) =>
        {
          return {
            fileName: item.fileName,
            filePath: item.filePath,
            id: item._id,
          };
        });
        setUploadedFile(image[image.length - 1].filePath);
        setUploadedFileId(image[image.length - 1].id);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() =>
  {
    loadImage();
  }, []);

  const onChange = (e) =>
  {
    setChildrenHelp("");
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) =>
  {
    setFileName("No file chosen");
    setFile("");
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "e0q1bp0i");
    Axios.post("https://api.cloudinary.com/v1_1/dmrpspydu/image/upload",
      formData
    ).then(response =>
    {
      console.log("response: ", response.data.public_id);
      setUploadedFile(`https://res.cloudinary.com/dmrpspydu/image/upload/v1649157923/${response.data.public_id}`);
      const ImageToAdd = {
        fileName: file.name,
        filePath: `https://res.cloudinary.com/dmrpspydu/image/upload/v1649157923/${response.data.public_id}`,
      };
      API.saveHomeImg(ImageToAdd);
    });
  }

const removeImage = async (e) => {
  console.log("Remove image has been clicked");
  const imageToRemovePublicId = e.target.getAttribute("id");
  await API.deleteHomeImg(imageToRemovePublicId);
  await loadImage();
}

  return (
    <Fragment>
      {uploadedFile ? (
        <Image
          className="mt-6"
          width="80%"
          cloudName="dmrpspydu"
          style={{ borderRadius: "20px" }}
          publicId={uploadedFile} />
      ) : null}
      <button onClick={removeImage} id={uploadedFileId}></button>
      <DeletePhoto />
      <SearchImage />
      <form className="mt-4" style={{ margin: "auto" }}>
        <div
          className="file is-normal is-boxed has-name"
          style={{
            justifyContent: "center",
          }}
        >
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              name="customFile"
              id="customFile"
              onChange={onChange}
            />
            <span className="file-cta">
              <span className="file-icon">
                <FontAwesomeIcon icon="upload" />
              </span>
              <span className="file-label">Choose a file</span>
            </span>
            <span className="file-name">{fileName}</span>
          </label>
        </div>
        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4 button"
          onClick={onSubmit}
        />
        <p className="help mt-4">{childrenHelp}</p>
      </form>
    </Fragment>
  );
};

export default FileUpload;
