# typegoose-_id-any  
Minimal working example to demonstrate the `any` type on a Document's `_id` field, when not explicitly defined in the model's class (should be `Types.ObjectId`).  
See [here](./src/main.ts#L19).

## SOLVED  
Since [typegoose `10.2.0-beta.3`](https://github.com/typegoose/typegoose/releases/tag/v10.2.0-beta.3) :
> * **types:** change "DocumentType" to actually use a proper "_id" type ([c63c5f1](https://github.com/typegoose/typegoose/commit/c63c5f1528dda78fc2d5c2ffc440a9d09a188b41))
