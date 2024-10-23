type GetDataValue<T> = T extends { data: infer D } ? D : never;
