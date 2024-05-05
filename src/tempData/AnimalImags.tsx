import dog1 from '../../public/animals/imgs/dog1.jpg'
import dog2 from '../../public/animals/imgs/dog2.jpg'
import dog3 from '../../public/animals/imgs/dog3.jpg'
import dog4 from '../../public/animals/imgs/dog4.jpg'
import dog5 from '../../public/animals/imgs/dog5.jpg'
import fourDogs from '../../public/animals/imgs/4dogs.jpg'
import cat from '../../public/animals/imgs/cat.jpg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'


class AnimalImagesClass{

    imageLink

    constructor(imageLink:StaticImport){
        this.imageLink = imageLink;
    }
}


export const AnimalImages = [
    new AnimalImagesClass(cat),
    new AnimalImagesClass(fourDogs),
    new AnimalImagesClass(dog1),
    new AnimalImagesClass(dog2),
    new AnimalImagesClass(dog3),
    new AnimalImagesClass(dog4),
    new AnimalImagesClass(dog5)
]








