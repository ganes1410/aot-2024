type StringToTuple<Item extends String> = Item extends `${infer Char}${infer Rest}` ? [Char,...StringToTuple<Rest>]:[]

type NaughtyOrNice<Name extends string> = StringToTuple<Name>['length'] extends 2 | 4 | 6 | 8 | 10 | 12 ? 'naughty': 'nice'

type FormatNames<Row> = {
	[K in keyof Row] : Row[K] extends [infer Name extends string,infer Gender extends string, infer Count extends string] ? {
		name: Name,
		count: Count extends `${infer CountNumber extends number}` ? CountNumber : never,
		rating:NaughtyOrNice<Name>
	}: never
}
