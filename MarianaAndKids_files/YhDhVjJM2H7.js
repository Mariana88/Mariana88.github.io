if (self.CavalryLogger) { CavalryLogger.start_js(["veMT+"]); }

__d("BoostedComponentBudgetAndDurationStringUtils",["fbt"],(function a(b,c,d,e,f,g,h){"use strict";var i={getSingleDaySpendNoticeInCreate:function j(k,l){return h._("If your ad starts running now, you'll spend about {todayBudget} today. Your estimated total budget is {amount}.",[h._param("todayBudget",k),h._param("amount",l)])},getMultiDaySpendNoticeInCreate:function j(k,l,m){return h._("If your ad starts running now, you'll spend about {todayBudget} today and {dailyBudget} daily. Your estimated total budget is {amount}.",[h._param("todayBudget",k),h._param("dailyBudget",l),h._param("amount",m)])},getSingleDaySpendNoticeInEdit:function j(k){return h._("Your ad will run for 1 day. Your estimated total spend for this ad will be {amount}.",[h._param("amount",k)])},getMultiWeekSpendNoticeInEdit:function j(k,l){return h._("Your ad will run for {number of weeks} weeks. Your estimated total spend for this ad will be {amount}.",[h._param("number of weeks",k/7),h._param("amount",l)])},getSingleWeekSpendNoticeInEdit:function j(k){return h._("Your ad will run for 1 week. Your estimated total spend for this ad will be {amount}.",[h._param("amount",k)])},getMultiDaySpendNoticeInEdit:function j(k,l){return h._("Your ad will run for {number of days} days. Your estimated total spend for this ad will be {amount}.",[h._param("number of days",k),h._param("amount",l)])}};f.exports=i}),null);