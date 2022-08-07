import CardBase from "./CardBase";

type CardProps = {
  title: string;
  img: string;
};

const CardCatalog = ({ img, title }: CardProps) => {
  return (
    <CardBase>
      <img src={img} className="w-full h-36 rounded-t-lg" />
      <h4 className="font-bold text-center py-3 px-3 truncate">{title}</h4>
    </CardBase>
  );
};

export default CardCatalog;
