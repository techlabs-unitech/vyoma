
import Image from "next/image";

export type PathwayKind =
  | "school"
  | "puc"
  | "ug"
  | "pro"
  | "exam"
  | "tech"
  | "voc";

const pathwayPhotos: Record<
  PathwayKind,
  { src: string; alt: string }
> = {
  school: {
    src: "/images/visuals/school.png",
    alt: "Students learning in a classroom",
  },
  puc: {
    src: "/images/visuals/puc.png",
    alt: "Higher secondary students studying together",
  },
  ug: {
    src: "/images/visuals/ug.png",
    alt: "University students in an academic environment",
  },
  pro: {
    src: "/images/visuals/pro.png",
    alt: "Professional education and accounting studies",
  },
  exam: {
    src: "/images/visuals/exam.png",
    alt: "Students preparing for competitive examinations",
  },
  tech: {
    src: "/images/visuals/tech.png",
    alt: "Students learning programming and technology",
  },
  voc: {
    src: "/images/visuals/voc.png",
    alt: "Students developing practical vocational skills",
  },
};

function Photo({
  src,
  alt,
  position = "center",
}: {
  src: string;
  alt: string;
  position?: string;
}) {
  return (
    <div className="visual-photo">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 40vw"
        style={{
          objectFit: "cover",
          objectPosition: position,
        }}
      />
    </div>
  );
}

export function PathwayIllustration({
  kind,
}: {
  kind: PathwayKind;
}) {
  return <Photo {...pathwayPhotos[kind]} />;
}

export function LiveClassIllustration() {
  return (
    <Photo
      src="/images/visuals/live-class.png"
      alt="Student attending an online learning session"
    />
  );
}

export function CounsellingIllustration() {
  return (
    <Photo
      src="/images/visuals/counselling.png"
      alt="Educational counsellor discussing learning opportunities"
    />
  );
}
