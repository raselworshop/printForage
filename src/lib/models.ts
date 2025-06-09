import modelData from '@/data/models.json';
import { Model } from '@/types';

export async function getAllModels(): Promise<Model[]> {
    // This is where you'd write code to fetch the list
    // of models from a database. We're mocking that with
    // our JSON array of data in models.json for now.
    return modelData as Model[]; 
    // return modelData;
}

export async function getModelById(id: string): Promise<Model | null> {
      // These functions don't technically need to be async functions,
  // but we're planning for the future when they'll be fetching
  // from a real data source.
    // const models = await getAllModels();
    // return models.find(model => model.id === parseInt(id)) || null;
    const foundModel = modelData.find((model: Model)=> model.id.toString() === id.toString())

    if (!foundModel) {
        throw new Error(`Model with id ${id} not found`);
    }
    return foundModel;
}
