type PerfReview<Func> = Func extends AsyncGenerator<infer Value> ?  Value : never;
