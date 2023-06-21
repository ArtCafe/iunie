import { ChangeEvent, useState } from 'react'

interface UseFormProps<T> {
    initialState: T
}

export const useForm = <T>({ initialState }: UseFormProps<T>) => {
    const [formState, setFormState] = useState<T>(initialState)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files?.length) {
      return;
    }

        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.files
        }))
    }

    return {
        formState,
        handleChange,
        handleChangeFile
    }
}

/* import * as React from "react";
import { useState, useEffect } from "react";

export interface File {
  name: string;
  lastModified: number;
  size: number;
  type: string;
}

export interface UploadFileProps {
  onFilesSelected?: (files: File[]) => void;
}

export const UploadFile = (props: UploadFileProps) => {
  const [selectedFiles, setFiles] = useState();

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files || [];
    setFiles(Array.from(files));
  };

  useEffect(() => {
    if (!props.onFilesSelected) return;
    props.onFilesSelected(selectedFiles);
  }, [selectedFiles, props]);

  return (
    <input
      type="file"
      accept="image/*,.pdf,.doc,.docx,.txt"
      onChange={handleOnChange}
      multiple
    />
  );
};

import { File, UploadFile } from "./upload-file/upload-file";
import { FilesList } from "./files-list/files-list";

import "./styles.css";

export default function App() {
  const [files, setFiles] = useState();

  const onFilesSelected = (files: File[]) => {
    if (!files) return;

    const transformedFiles: File[] = files.map((file: File) => {
      const lastModified = format(file.lastModified, "d. MMM yyyy", {
        locale: da
      });
      return { lastModified, ...file };
    });

    setFiles(transformedFiles);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <UploadFile onFilesSelected={onFilesSelected} />
      <FilesList files={files} />
    </div>
  );
}



























*/

