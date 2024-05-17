


class AdoptionClass{
    title : string
    description : string
    
    constructor(title:string,description:string){
        this.title = title
        this.description = description
    }
}




const AdoptionInfoArray: AdoptionClass[] = [
    new AdoptionClass("Application Fee","There is a non-refundable application fee of $50. This fee helps cover the administrative costs of processing your application and conducting the necessary background checks and home visits."),
    new AdoptionClass("Age Requirement","You must be at least 21 years of age Homeownership or Landlord Approval: If you rent, you must provide written permission from your landlord allowing you to have a dog."),
    new AdoptionClass("Fenced Yard","Your home must have a secure, fenced-in yard or access to a nearby park or other outdoor space where the dog can be safely exercised. "),
    new AdoptionClass("Time Commitment","You must be able to commit to providing the dog with a minimum of 2 hours of daily exercise and attention. Household Composition: All members of your household, including children, must be willing to welcome the dog and participate in its care. "),
    new AdoptionClass(" No Recent Moves","You must have lived at your current address for at least 6 months. No Recent Adoptions: You must not have adopted a dog from another shelter or rescue organization within the past 12 months")
]
export const AdoptionProcessArray: AdoptionClass[] =[
    new AdoptionClass("Application Submission","Complete the dog adoption application in full and submit it along with the $50 application fee."),
    new AdoptionClass("Background Check","We will conduct a thorough background check, including a review of your veterinary and personal references."),
    new AdoptionClass("Home Visit","A member of our staff will schedule a home visit to ensure that your living environment is suitable for a dog."),
    new AdoptionClass("Adoption Counseling","If your application is approved, you will meet with one of our adoption counselors to discuss the specific needs of the dog you are interested in and ensure that it is a good match for your lifestyle."),
    new AdoptionClass("Adoption Agreement"," If all parties agree that the adoption is a good fit, you will be required to sign an adoption agreement that outlines your responsibilities as the dog's new owner.")
]

export default AdoptionInfoArray;




