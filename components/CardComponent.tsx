import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

interface CardComponentProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, description, imageUrl, linkUrl }) => (
  <Card
    isFooterBlurred
    radius="lg"
    className="border-none w-full sm:w-[300px] h-[300px] mx-auto"
  >
    <Image
      alt={title}
      className="object-cover w-full h-full rounded-lg"
      src={imageUrl}
    />
    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-white/80">{description}</p>
      </div>
      <Button
        className="text-tiny text-white bg-black/20"
        variant="flat"
        color="default"
        radius="lg"
        size="sm"
        as="a"
        href={linkUrl}
        target="_blank"
      >
        Check
      </Button>
    </CardFooter>
  </Card>
);

export default CardComponent;
