import * as fabric from "fabric";
import { useEffect, useRef } from "react";

export default function Tes() {
  console.log(route().params);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fabricCanvas = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      fabricCanvas.current = new fabric.Canvas(canvasRef.current);
    }
  }, []);

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!fabricCanvas.current) return;

    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageUrl = reader.result as string;
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;

      imageElement.onload = () => {
        const image = new fabric.Image(imageElement);

        const canvasWidth = fabricCanvas.current!.getWidth();
        const canvasHeight = fabricCanvas.current!.getHeight();
        // Hitung skala agar gambar sesuai dengan ukuran canvas tanpa distorsi
        const scaleFactor = Math.min(
          canvasWidth / image.width!,
          canvasHeight / image.height!
        );
        image.scale(scaleFactor);

        fabricCanvas.current?.add(image);
        fabricCanvas.current?.centerObject(image);
        fabricCanvas.current?.setActiveObject(image);
      };
    };
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <input
        type="file"
        accept="image/*"
        aria-label="add image"
        className="absolute top-[25%] left-[30%]"
        onChange={handleAddImage}
      />
      <canvas
        width={300}
        height={300}
        className="border border-gray-400 top-[30%] left-[30%]"
        ref={canvasRef}
      />
    </div>
  );
}
