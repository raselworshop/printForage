import modelData from '@/data/models.json';
import { Model } from '@/types';

export async function getAllModels(): Promise<Model[]> {
    // This is where you'd write code to fetch the list
    // of models from a database. We're mocking that with
    // our JSON array of data in models.json for now.
    return modelData as Model[]; 
    // return modelData;
}