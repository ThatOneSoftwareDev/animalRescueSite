
export interface linkObject{
    linkName: string,
    linkLocation: string,
}

export interface NavbarLinksObject extends linkObject {
    subListLinks: linkObject[]
}

export class NavbarLink{

    linkName: string
    linkLocation: string
    subListLinks: linkObject[]
    

    constructor(linkName: string, linkLocation: string,subListLinks: linkObject[]){
        this.linkName = linkName;
        this.linkLocation = linkLocation,
        this.subListLinks = subListLinks
    }
}

export class linkObject{

    name:string
    location:string

    constructor(name:string,location:string){
        this.name = name;
        this.location = location
    }
}











