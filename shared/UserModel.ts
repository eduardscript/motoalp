interface UseModel {
    name: string;
    city: string;
    phoneNumber: number;
    identityCardNumber: number
    shirtSize: 'S' | 'M' | 'L' | 'XL' | 'XXL',
    metadata: {
        ip: string | undefined
    }
}

export default UseModel