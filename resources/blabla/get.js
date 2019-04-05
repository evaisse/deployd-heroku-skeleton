var done = ctx.done;
ctx.done = function() {};

ctx.dpd.velos.getResource().store.getCollection().then(col => {

	let crits = {
		pratique: col.distinct('pratique'),
		marque: col.distinct('marque'),
	};

	Promise.all(Object.entries(crits).map(r => r[1])).then((res) => {
		let json = {};
		Object.keys(crits).forEach((k, i) => {
			json[k] = res[i];
		});
		done(null, json);
	});

});