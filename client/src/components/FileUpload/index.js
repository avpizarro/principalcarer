import { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import { Image } from 'cloudinary-react';
import API from "../../utils/API";
import DeletePhoto from "../IconDeletePhoto";
import SearchImage from "../IconSearchImage";
import IconImageUpload from "../IconImageUpload";
import "./style.css";

const FileUpload = () =>
{
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const [uploadedFile, setUploadedFile] = useState("");
  const [uploadedFileId, setUploadedFileId] = useState("");
  const [childrenHelp, setChildrenHelp] = useState("");
  const [showUploadForm, setShowUploadForm] = useState(false);

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
    if (fileName !== "No file chosen") {
    setFileName("No file chosen");
    setFile("");
    setShowUploadForm(false);
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
  } else {
    setChildrenHelp("Choose a file");
  }
  }

  const removeImage = async (e) =>
  {
    console.log("Remove image has been clicked");
    console.log("file Mongo Id: ", uploadedFileId);
    await API.deleteHomeImg(uploadedFileId);
    await loadImage();
  }

  const uploadImage = (e) =>
  {
    setShowUploadForm(prevShowUploadForm => !prevShowUploadForm);
  }

  // Function to show the upload image form
  const ShowUploadImage = () =>
  {
    return (
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
              <span className="file-label">Choose a file</span>
            </span>
            <span className="file-name">{fileName}</span>
          </label>
        </div>
        <input
          type="submit"
          value="upload"
          className={fileName !== "No file chosen" ? "btn btn-primary btn-block mt-4 button uploadBtn" : "btn btn-primary btn-block mt-4 button"}
          onClick={onSubmit}
        />
        <p className="help mt-4">{childrenHelp}</p>
      </form>
    )
  }


  console.log("showUploadForm", showUploadForm);

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
      <div>
        <button
          onClick={uploadImage}
          style={{ backgroundColor: "white", border: "none" }}>
          <IconImageUpload />
        </button>
        <button
          onClick={removeImage}
          style={{ backgroundColor: "white", border: "none" }}>
          <DeletePhoto id={uploadedFileId} />
        </button>
        <SearchImage />
      </div>
      {showUploadForm === true ? (
        <ShowUploadImage />
      ) : null}
    </Fragment>
  )
};

export default FileUpload;
