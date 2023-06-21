import http from "./http-common";
const API_Post = '/api/posts/'

const upload = (formData: any, onUploadProgress: any): Promise<any> => {
//const upload = (file: File, onUploadProgress: any): Promise<any> => {
 // let formData = new FormData();

 // formData.append("file", file);

  return http.post("/api/posts/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () : Promise<any> => {
  return http.get("/files");
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;