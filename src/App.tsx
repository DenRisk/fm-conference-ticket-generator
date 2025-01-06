import {useState} from "react"
import Container from './components/container/container.tsx'
import Logo from './components/logo/logo.tsx'
import Input from './components/input/input.tsx'
import CustomButton from './components/custom-button/custom-button.tsx'
import ImageUpload from './components/image-upload/image-upload.tsx'
import {SubmitHandler, useForm} from "react-hook-form"
import Icon from './components/icon/icon.tsx'

type Mode = 'form' | 'generated'

export type FormDataModel = {
    fullName: string;
    email: string;
    github: string;
    upload: File | null;
};


function App() {
    const [mode, setMode] = useState<Mode>('form');
    const [formData, setFormData] = useState<FormDataModel>({
        fullName: '',
        email: '',
        github: '',
        upload: null
    });

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        clearErrors,
        formState: {errors, isValid}
    } = useForm<FormDataModel>({
        defaultValues: {
            fullName: '',
            email: '',
            github: '',
            upload: null
        }
    });

    const onSubmit: SubmitHandler<FormDataModel> = (data: FormDataModel) => {
        if (isValid) {
            setFormData(data);
            setMode('generated');
        }
    };

    const getUploadImage = () => {
        if (formData.upload) {
            return URL.createObjectURL(formData.upload);
        }
        return '';
    }

    return (
        <div
            className="relative h-full bg bg-[url(./assets/images/background-mobile.png)] bg-cover bg-no-repeat bg-center md:bg-[url(./assets/images/background-tablet.png)] xl:bg-[url(./assets/images/background-desktop.png)]">
            <div className='absolute bottom-0 left-0 aspect-112/50 w-[232px] xl:w-[446px] z-1'>
                <Icon id='lineBottom' pointer={false}/>
            </div>
            <div className='absolute top-6 right-0 w-[112px] aspect-112/50 md:w-[232px] xl:w-[446px] z-1'>
                <Icon id='lineTop' pointer={false}/>
            </div>
            <div className='absolute top-0 right-0 left-0 z-0'>
                <Icon id='lines' pointer={false}/>
            </div>
            <Container>
                <section className='text-center z-10 relative pb-20'>
                    <header className='pt-10 pb-14'>
                        <Logo/>
                    </header>
                    {
                        mode === 'form' && (
                            <main>
                                <h1 className='text-custom-1 mb-5'>Your Journey to Coding Conf 2025 Starts Here!</h1>
                                <p className='text-custom-4 mb-8'>
                                    Secure your spot at next year’s biggest coding conference.
                                </p>
                                <form className='text-left' onSubmit={handleSubmit(data => onSubmit(data))}>
                                    <ImageUpload
                                        register={register}
                                        errors={errors}
                                        setValue={setValue}
                                        setError={setError}
                                        clearErrors={clearErrors}
                                    />
                                    <Input
                                        type={'text'}
                                        id={'fullName'}
                                        name={'fullName'}
                                        label='Full Name'
                                        register={register}
                                        errors={errors}
                                    />
                                    <Input
                                        type={'text'}
                                        id={'email'}
                                        name={'email'}
                                        label='Email Address'
                                        placeholder='example@email.com'
                                        register={register}
                                        errors={errors}
                                    />
                                    <Input
                                        type={'text'}
                                        id={'github'}
                                        name={'github'}
                                        label='Github Username'
                                        placeholder='@yourusername'
                                        register={register}
                                        errors={errors}
                                    />
                                    <CustomButton
                                        type='submit'
                                        fullWidth={true}
                                    >
                                        Generate My Ticket
                                    </CustomButton>
                                </form>
                            </main>
                        )
                    }
                    {
                        mode === 'generated' && (
                            <main>
                                <h1 className='text-custom-1 mb-8 lg:mb-12'>Congrats, <span
                                    className='bg-custom-gradient bg-clip-text text-transparent'>{formData.fullName}!</span> Your
                                    ticket is ready.</h1>
                                <p className='text-custom-4 mb-20 lg:mb-32'>
                                    We've emailed your ticket to <span
                                    className='text-primary-500'>{formData.email}</span> and will send updates in the run
                                    up to the event.
                                </p>
                                <div
                                    className="mx-auto max-w-[600px] bg-[url('./assets/images/pattern-ticket.svg')] bg-cover bg-center flex rounded-xl relative p-4 xs:p-8 text-left aspect-9/4">
                                    <div className='flex flex-col justify-between h-full grow'>
                                        <div className='flex gap-x-6 items-start'>
                                            <Icon id='logoMark' pointer={false}/>
                                            <div>
                                                <h2 className='text-custom-2 mb-2'>Coding Conf</h2>
                                                <p className='text-neutral-300 text-custom-6'>Jan 31, 2025 / Austin, TX</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-x-4 items-center'>
                                            <div
                                                className='rounded-[12px] overflow-clip aspect-1/1 w-14 h-14 sm:w-20 sm:h-20'>
                                                <img src={getUploadImage()} alt='Calendar Icon'/>
                                            </div>
                                            <div>
                                                <h3 className='text-custom-6 xs:text-custom-3 mb-1.5'>{formData.fullName}</h3>
                                                <div className='flex gap-x-2'>
                                                    <Icon id='github' pointer={false}/>
                                                    <p className='text-custom-5-regular'>{formData.github}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center basis-1/6'>
                                        <p className='text-neutral-500 text-custom-3 rotate-90'>#01609</p>
                                    </div>
                                </div>
                            </main>
                        )
                    }
                </section>
            </Container>
        </div>
    )
}

export default App
