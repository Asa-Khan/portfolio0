import Image from 'next/image';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <div className="relative w-64 h-64 group sm:w-auto sm:h-auto">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="rounded-full shadow-xl"
      />
      <div className="absolute inset-0 border-[3px] z-[-1] border-accent translate-x-2 translate-y-2 rounded-full group-hover:translate-x-3 group-hover:translate-y-3 duration-200 hidden sm:block"></div>
    </div>
  );
};

export default AuthorImage;
