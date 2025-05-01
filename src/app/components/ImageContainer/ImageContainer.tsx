"use client";

import { useAppSelector } from "@/app/hooks/ReduxHooks";
import Image from "next/image";
import placeholderImage from "../../images/cat_image_placeholder.jpg";
import styles from "./ImageContainer.module.scss";

export const ImageContainer = () => {
	const catImageLink = useAppSelector((state) => state.catImage.link);

	return (
		<div>
			<Image
				unoptimized
				className={styles.image_container}
				alt={"Изображение кота"}
				width={800}
				height={800}
				src={catImageLink || placeholderImage.src}
				loading="eager"
			/>
		</div>
	);
};

export default ImageContainer;
