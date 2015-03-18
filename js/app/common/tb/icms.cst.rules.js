define(function () {

	function IcmsCstRules(cstCode) {
		var cst = cstCode ? cstCode.replace(/[A-Z]/g, '') : 0;

		this.isModalidadeBC = function () {
			return cst == 00 || cst == 10 || cst == 20 || cst == 70 || cst == 90 || cst == 201 || cst == 202 || cst == 900;
		};

		this.isPercentualReducaoBC = function () {
			return cst == 10 || cst == 30 || cst == 70 || cst == 90 || cst == 201 || cst == 202 || cst == 203 || cst == 900;
		};

		this.isPercentualICMS = function () {
			return cst == 00 || cst == 10 || cst == 70 || cst == 90 || cst == 101 || cst == 201 || cst == 202 || cst == 900;
		};

		this.isModalidadeBCST = function () {
			return cst == 10 || cst == 30 || cst == 70 || cst == 90 || cst == 201 || cst == 202 || cst == 203 || cst == 900;
		};

		this.isPercentualValorAgregado = function () {
			return cst == 10 || cst == 30 || cst == 70 || cst == 90 || cst == 201 || cst == 202 || cst == 203 || cst == 900;
		};

		this.isPercentualReducaoCST = function () {
			return cst == 10 || cst == 30 || cst == 70 || cst == 90 || cst == 201 || cst == 202 || cst == 203 || cst == 900;
		};

		this.isPercentualSubstituicaoICMS = function () {
			return cst == 10 || cst == 20 || cst == 30 || cst == 70 || cst == 90 || cst == 201 || cst == 202 || cst == 203 || cst == 900;
		};

	}

	return IcmsCstRules;
});