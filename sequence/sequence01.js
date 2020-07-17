module.exports = {
	execute: (utils) => {
		return new Promise((resolve, reject) => {
			console.log("Sequence sends to API :");
			console.log({
				f_siret: utils.sessionData.siret,
				f_siren: utils.sessionData.naf
			});
			utils.api.call({
				url: '/api/societe/'+utils.env.id,
				method: 'put',
				body: {
					f_siret: utils.sessionData.siret,
					f_siren: utils.sessionData.naf
				}
			}).then(resolve).catch(reject);
		});
	}
};