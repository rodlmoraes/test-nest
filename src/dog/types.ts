type Breed = {
    id: string;
    type: string;
    attributes: BreedAttributes;
    relationships: BreedRelationships;
}


type BreedAttributes = {
    name: string;
    description: string;
    life: { min: number; max: number };
    male_weight: { min: number; max: number };
    female_weight: { min: number; max: number };
    hypoallergenic: boolean;
}

type BreedRelationships = {
    group: { data: { id: string; type: string } };
}
