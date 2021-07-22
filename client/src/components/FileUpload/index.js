import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import profile from "../../images/homephoto.png";
import API from "../../utils/API";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const [uploadedFile, setUploadedFile] = useState({
    // fileName: "portrait.png",
    // filePath: profile,
  });
  const [childrenHelp, setChildrenHelp] = useState("");

  function loadImage() {
    API.getHomeImages()
      .then((res) => {
        console.log(res);
        const image = res.data.map((item) => {
          return {
            fileName: item.fileName,
            filePath: item.filePath,
            id: item._id,
          };
        });
        setUploadedFile(image[image.length - 1]);
      })
      .catch((err) => console.log(err));
  }
  
  useEffect(() => {
    loadImage();
  }, []);

  const onChange = (e) => {
    setChildrenHelp("");
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    setFileName("No file chosen");
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;

      console.log("Response data", res.data);
      setUploadedFile({ fileName , filePath });
      console.log(filePath);
      API.saveHomeImg({
        fileName: fileName,
        filePath: filePath,
      })
    } catch (err) {
      if (err.response.status === 400) {
        setChildrenHelp("No file chosen");
        console.log("There was a problem with the server");
      } else if (err.response.status === 404){
        console.log(err.response.data.res);
        setChildrenHelp("File already uploaded");
      }
    }
  };


  return (
    <Fragment>
      { uploadedFile ? (
      <img
        src={process.env.PUBLIC_URL + uploadedFile.filePath}
        alt={uploadedFile.fileName}
        id={uploadedFile.id}
        className="mt-6"
        height="100px"
        width="100px"
      />) : null}
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
