type Excuse<ExcuseItem extends Record<string,string>> = {
	new (excuses:ExcuseItem) : keyof ExcuseItem extends string ? `${keyof ExcuseItem}: ${ExcuseItem[keyof ExcuseItem]}`: never
}
