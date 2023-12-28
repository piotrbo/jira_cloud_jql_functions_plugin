export const weeklyVersion = async (args) => {//issue in weeklyVersion("prefix")

  const { clause } = args;
  const { operator } = clause;
  const [prefix] = clause.arguments;

  const currentDate = new Date(Date.now());
  const year = currentDate.getUTCFullYear();
  const week = currentDate.getWeekNumber();

  const jqlFragment = ` fixVersion = "${prefix + year}.${week}"`;

  console.log("evaluated to: " + jqlFragment);
  return { jql: jqlFragment };
}

Date.prototype.getWeekNumber = function(){
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};