import { useState, useRef } from "react";
import Icon from "../icon/icon.tsx";
import { FieldErrors, UseFormClearErrors, UseFormRegister, UseFormSetError, UseFormSetValue } from "react-hook-form";
import { FormDataModel } from "../../App.tsx";

type Image = string | null;

type ImageUploadProps = {
    register: UseFormRegister<FormDataModel>;
    setValue: UseFormSetValue<FormDataModel>;
    setError: UseFormSetError<FormDataModel>
    clearErrors: UseFormClearErrors<FormDataModel>;
    errors?: FieldErrors<FormDataModel>;
};

const ImageUpload = ({ register, setError, setValue, errors, clearErrors}: ImageUploadProps) => {
    const [image, setImage] = useState<Image>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (file) {
            if (file.size > 500 * 1024) {
                setError("upload", {
                    type: "fileSize",
                    message: "File too large. Please upload an image under 500KB."
                });
                return;
            }

            if (!file.type.startsWith("image/")) {
                setError("upload", {
                    type: "fileType",
                    message: "Invalid file type. Please use JPG or PNG."
                });
                return;
            }

            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setValue("upload", file);
            clearErrors("upload");
        }
    };

    const handleRemoveImage = () => {
        fileInputRef.current!.value = "";
        setImage(null);
        setValue("upload", null);
    };

    const handleChangeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="flex flex-col mb-6">
            <label htmlFor="file-upload" className="text-custom-5-regular">
                Upload Avatar
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register("upload", {
                        required: 'Avatar is required'
                    })}
                    ref={fileInputRef}
                    onChange={handleUpload}
                />
            </label>

            {
                !image ? (
                    <button
                        className="mt-3 mb-3 flex flex-col gap-y-4 items-center rounded-[12px] border border-dashed border-neutral-500 backdrop-blur-md bg-neutral-0 bg-opacity-10 pt-3 pb-3 pl-4 pr-4 text-custom-6 text-neutral-300 focus:outline-none min-h-40 justify-center cursor-pointer hover:bg-opacity-20 focus:bg-opacity-20"
                        onClick={handleChangeImage}
                    >
                        <div className="w-[50px] h-[50px] border border-neutral-700 rounded-[12px] bg-neutral-0 bg-opacity-10 flex items-center justify-center">
                            <Icon id="upload" pointer={true} />
                        </div>
                        <p className="text-custom-6 text-neutral-300">
                            Drag and drop or click to upload
                        </p>
                    </button>
                ) : (
                    <div className="mt-3 mb-3 flex flex-col gap-y-4 items-center rounded-[12px] border border-dashed border-neutral-500 backdrop-blur-md bg-neutral-0 bg-opacity-10 pt-3 pb-3 pl-4 pr-4 text-custom-6 text-neutral-300 focus:outline-none min-h-40 justify-center">
                        <div className="w-[50px] h-[50px] border border-neutral-700 rounded-[12px] bg-neutral-0 bg-opacity-10 flex items-center justify-center overflow-hidden">
                            <img src={image} alt="Preview Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex gap-x-2">
                            <button
                                onClick={handleRemoveImage}
                                className="py-1 px-2 rounded bg-neutral-0 bg-opacity-10 text-neutral-300 hover:underline underline-offset-4"
                            >
                                Remove Image
                            </button>
                            <button
                                onClick={handleChangeImage}
                                className="py-1 px-2 rounded bg-neutral-0 bg-opacity-10 text-neutral-300 hover:underline underline-offset-4"
                            >
                                Change Image
                            </button>
                        </div>
                    </div>
                )
            }
            {
                !errors?.upload && (
                    <div className="flex items-center gap-x-1">
                        <Icon id="info" pointer={false}/>
                        <p className="text-custom-7 text-sm">Upload your photo (JPG or PNG, max size: 500KB).</p>
                    </div>
                )
            }

            {
                errors?.upload && (
                    <div className="flex items-center gap-x-1 text-primary-500">
                        <Icon id="info" pointer={false}/>
                        <p className="text-custom-7 text-sm" role="alert" aria-live="assertive">{String(errors.upload.message)}</p>
                    </div>
                )
            }
        </div>
    );
};

export default ImageUpload;
