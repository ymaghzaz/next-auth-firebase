import { useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import classes from "./upload.module.css";
import { uploadFileToStorage } from "../../src/utils/firebase";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const UploadFile = () => {
  const [files, setFiles] = useState([]);
  return (
    <div className={classes.btn}>
      <FilePond
        maxParallelUploads={1}
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        server={{
          process: async (_, file, __, load, error) => {
            await uploadFileToStorage(file);
            load();
            console.log("error", error);
            console.log("load", load);
            console.log("file", file);
          },
        }}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};

export default UploadFile;
