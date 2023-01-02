export interface Company {
    city: string,
    companyName:string,
    email: string,
    founder: string,
    location?: {
        latitude: number,
        longitude: number
    },
    logo: string,
    numOfEmployees: number,
    phone?: number,
    sector: string[],
    website: string,
    yearOfEstablishment: number
}

