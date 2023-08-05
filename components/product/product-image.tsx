import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "../ui/icon-button";

interface ProductImageProps {
  imageUrl?: string | null;
  onPreview: MouseEventHandler<HTMLButtonElement>;
  onAddToCart: MouseEventHandler<HTMLButtonElement>;
}

const ProductImage: React.FC<ProductImageProps> = ({
  imageUrl,
  onPreview,
  onAddToCart
}) => {
  return (
    <div className="aspect-square rounded-xl bg-gray-100 relative">
      <Image
        src={imageUrl ?? "/images/placeholder.jpg"}
        alt=""
        fill
        className="aspect-square object-cover rounded-md"
      />
      <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
        <div className="flex gap-x-6 justify-center">
          <IconButton
            onClick={onPreview}
            icon={<Expand size={20} className="text-gray-600" />}
          />
          <IconButton
            onClick={onAddToCart}
            icon={<ShoppingCart size={20} className="text-gray-600" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
