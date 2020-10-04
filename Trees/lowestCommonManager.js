// AlgoExpert URL: https://www.algoexpert.io/questions/Lowest%20Common%20Manager
// O(n) Time | O(d) Space; N = Number of Elements, d = depth of tree
function getLowestCommonManager(topManager, reportOne, reportTwo) {
	return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
}

function getOrgInfo(manager, reportOne, reportTwo) {
	let numImportantReports = 0;
	for (const directReport of manager.directReports) {
		const orgInfo = getOrgInfo(directReport, reportOne, reportTwo);
		if (!!orgInfo.lowestCommonManager) return orgInfo;
		numImportantReports += orgInfo.numImportantReports;
	}
	if (manager === reportOne || manager === reportTwo) numImportantReports++;
	const lowestCommonManager = numImportantReports === 2 ? manager : null;
	return {lowestCommonManager, numImportantReports};
}

// This is an input class. Do not edit.
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}
