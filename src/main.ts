import { getModelForClass, prop } from "@typegoose/typegoose";
import { DocumentType } from "@typegoose/typegoose/lib/types";
import { Types } from "mongoose"

class Animal {

  @prop({ required: true })
  public species!: string;

}
const AnimalModel = getModelForClass(Animal);
/** Here, type of `_id` isn't {@link Types.ObjectId}. */
type AnimalDocument = DocumentType<Animal>;

(async () => {

  /** Type if "_id" is `any`, but should be {@link Types.ObjectId}. */
  const animalId = (await AnimalModel.findOne({ species: "DoesThe'_id'TypeWork?" }))!;
  animalId._id

})()
