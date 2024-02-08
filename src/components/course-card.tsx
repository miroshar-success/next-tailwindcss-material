import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";


interface CourseCardProps {
  url: string;
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
}

export function CourseCard({ url, img, tag, title, desc, label }: CourseCardProps) {
  const handleExternalLink = (event) => {
    event.preventDefault();
    window.open(url, '_blank');
  };
  return (
    <Card className="border">
      <CardHeader className="h-64">
        <Link href={url} onClick={handleExternalLink}>
          <Image
            width={768}
            height={768}
            src={img}
            alt={title}
            className="h-full w-full object-cover scale-[1.1]"
          />
        </Link>
      </CardHeader>
      <CardBody>
        <div className="flex items-center gap-2">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-normal text-gray-500"
          >
            {tag}
          </Typography>
        </div>
        <span
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography variant="h5" className="mb-2 normal-case">
            {title}
          </Typography>
        </span>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        {/* <Button variant="outlined">{label}</Button> */}
      </CardBody>
    </Card>
  );
}

export default CourseCard;
