var seen = {
    "2015-101": false,
    "2015-102": false,
    "2015-103": false,
    "2015-104": false,
    "2015-105": false,
    "2015-106": false,
    "2015-107": false,
    "2015-108": false,
    "2015-201": false,
    "2015-202": false,
    "2015-203": false,
    "2015-204": false,
    "2015-205": false,
    "2015-206": false,
    "2015-207": false,
    "2015-208": false,
    "2015-209": false,
    "2015-210": false,
    "2015-211": false,
    "2015-212": false,
    "2015-213": false,
    "2015-214": false,
    "2015-215": false,
    "2015-216": false,
    "2015-217": false,
    "2015-218": false,
    "2015-219": false,
    "2015-220": false,
    "2015-221": false,
    "2015-222": false,
    "2015-223": false,
    "2015-224": false,
    "2015-225": false,
    "2015-226": false,
    "2015-227": false,
    "2015-228": false,
    "2015-229": false,
    "2015-230": false,
    "2015-231": false,
    "2015-232": false,
    "2015-233": false,
    "2015-234": false,
    "2015-301": false,
    "2015-302": false,
    "2015-303": false,
    "2015-304": false,
    "2015-306": false,
    "2015-401": false,
    "2015-402": false,
    "2015-403": false,
    "2015-404": false,
    "2015-405": false,
    "2015-406": false,
    "2015-407": true,
    "2015-408": false,
    "2015-409": false,
    "2015-410": false,
    "2015-411": false,
    "2015-412": false,
    "2015-413": false,
    "2015-414": false,
    "2015-501": false,
    "2015-502": false,
    "2015-503": false,
    "2015-504": false,
    "2015-505": false,
    "2015-506": false,
    "2015-507": false,
    "2015-508": false,
    "2015-509": false,
    "2015-510": false,
    "2015-511": false,
    "2015-602": false,
    "2015-603": false,
    "2015-604": false,
    "2015-605": false,
    "2015-606": false,
    "2015-607": false,
    "2015-608": false,
    "2015-609": false,
    "2015-610": false,
    "2015-701": false,
    "2015-702": false,
    "2015-703": false,
    "2015-704": false,
    "2015-705": false,
    "2015-706": false,
    "2015-707": false,
    "2015-708": false,
    "2015-709": false,
    "2015-710": false,
    "2015-711": false,
    "2015-712": false,
    "2015-713": false,
    "2015-714": false,
    "2015-715": false,
    "2015-717": false,
    "2015-718": false,
    "2015-719": false,
    "2015-720": false,
    "2015-801": false,
    "2015-802": false,
    "2015-803": true,
    "2015-804": false,
    "2015-805": false,

    "2014-101": false,
    "2014-102": false,
    "2014-103": false,
    "2014-201": false,
    "2014-202": false,
    "2014-203": false,
    "2014-204": false,
    "2014-205": false,
    "2014-206": false,
    "2014-207": false,
    "2014-208": false,
    "2014-209": false,
    "2014-210": false,
    "2014-211": false,
    "2014-212": false,
    "2014-213": false,
    "2014-214": false,
    "2014-216": false,
    "2014-217": false,
    "2014-218": false,
    "2014-219": false,
    "2014-220": false,
    "2014-221": false,
    "2014-222": false,
    "2014-223": true,
    "2014-224": false,
    "2014-225": false,
    "2014-226": false,
    "2014-227": false,
    "2014-228": true,
    "2014-229": false,
    "2014-230": false,
    "2014-231": false,
    "2014-232": false,
    "2014-233": false,
    "2014-234": false,
    "2014-235": false,
    "2014-236": false,
    "2014-237": false,
    "2014-301": false,
    "2014-302": false,
    "2014-303": false,
    "2014-304": false,
    "2014-305": false,
    "2014-306": false,
    "2014-401": false,
    "2014-402": false,
    "2014-403": false,
    "2014-404": false,
    "2014-406": false,
    "2014-407": false,
    "2014-408": false,
    "2014-409": false,
    "2014-410": false,
    "2014-411": false,
    "2014-412": false,
    "2014-413": false,
    "2014-414": false,
    "2014-415": false,
    "2014-416": false,
    "2014-417": false,
    "2014-418": false,
    "2014-419": false,
    "2014-501": false,
    "2014-502": false,
    "2014-503": false,
    "2014-504": false,
    "2014-505": false,
    "2014-506": false,
    "2014-508": false,
    "2014-509": false,
    "2014-510": false,
    "2014-511": false,
    "2014-512": false,
    "2014-513": false,
    "2014-514": false,
    "2014-515": false,
    "2014-516": false,
    "2014-517": false,
    "2014-601": false,
    "2014-602": false,
    "2014-603": false,
    "2014-604": false,
    "2014-605": false,
    "2014-606": false,
    "2014-608": false,
    "2014-609": false,
    "2014-610": false,
    "2014-611": false,
    "2014-612": false,
    "2014-701": false,
    "2014-702": false,
    "2014-703": false,
    "2014-704": false,
    "2014-705": false,
    "2014-706": false,
    "2014-707": false,
    "2014-708": false,
    "2014-709": false,
    "2014-710": false,
    "2014-711": false,
    "2014-712": false,
    "2014-713": false,
    "2014-714": false,
    "2014-715": false,
    "2014-717": false,
    "2014-718": false,

    "2013-100": false,
    "2013-101": false,
    "2013-109": false,
    "2013-200": false,
    "2013-201": false,
    "2013-202": false,
    "2013-203": false,
    "2013-204": false,
    "2013-205": false,
    "2013-206": false,
    "2013-207": false,
    "2013-208": false,
    "2013-209": false,
    "2013-210": false,
    "2013-211": false,
    "2013-213": false,
    "2013-214": false,
    "2013-215": false,
    "2013-216": false,
    "2013-217": false,
    "2013-218": false,
    "2013-219": false,
    "2013-220": false,
    "2013-221": false,
    "2013-222": false,
    "2013-223": false,
    "2013-224": false,
    "2013-225": false,
    "2013-226": false,
    "2013-227": false,
    "2013-228": false,
    "2013-300": false,
    "2013-301": false,
    "2013-302": false,
    "2013-303": false,
    "2013-304": false,
    "2013-305": false,
    "2013-306": false,
    "2013-307": false,
    "2013-308": false,
    "2013-309": false,
    "2013-310": false,
    "2013-400": false,
    "2013-401": false,
    "2013-402": false,
    "2013-403": false,
    "2013-404": false,
    "2013-405": false,
    "2013-406": false,
    "2013-407": false,
    "2013-408": false,
    "2013-409": false,
    "2013-410": false,
    "2013-412": false,
    "2013-413": false,
    "2013-414": false,
    "2013-415": false,
    "2013-416": false,
    "2013-417": false,
    "2013-500": false,
    "2013-501": false,
    "2013-502": false,
    "2013-503": false,
    "2013-504": false,
    "2013-505": false,
    "2013-506": false,
    "2013-507": false,
    "2013-508": false,
    "2013-509": false,
    "2013-600": false,
    "2013-601": false,
    "2013-602": false,
    "2013-603": false,
    "2013-604": false,
    "2013-605": false,
    "2013-606": false,
    "2013-607": false,
    "2013-608": false,
    "2013-609": false,
    "2013-610": false,
    "2013-611": false,
    "2013-612": false,
    "2013-613": false,
    "2013-614": false,
    "2013-615": false,
    "2013-700": false,
    "2013-701": false,
    "2013-702": false,
    "2013-703": false,
    "2013-704": false,
    "2013-705": false,
    "2013-707": false,
    "2013-708": false,
    "2013-709": false,
    "2013-710": false,
    "2013-711": false,
    "2013-712": false,
    "2013-713": false,
    "2013-714": false,

    "2012-100": false,
    "2012-101": false,
    "2012-200": false,
    "2012-202": false,
    "2012-203": false,
    "2012-204": false,
    "2012-205": false,
    "2012-206": false,
    "2012-208": false,
    "2012-209": false,
    "2012-210": false,
    "2012-211": false,
    "2012-212": false,
    "2012-213": false,
    "2012-214": false,
    "2012-215": false,
    "2012-216": false,
    "2012-217": false,
    "2012-218": false,
    "2012-219": false,
    "2012-220": false,
    "2012-221": false,
    "2012-222": false,
    "2012-223": false,
    "2012-224": false,
    "2012-225": false,
    "2012-226": false,
    "2012-227": false,
    "2012-228": false,
    "2012-230": false,
    "2012-231": false,
    "2012-232": false,
    "2012-233": false,
    "2012-234": false,
    "2012-235": false,
    "2012-236": false,
    "2012-237": false,
    "2012-238": false,
    "2012-240": false,
    "2012-241": false,
    "2012-242": false,
    "2012-243": false,
    "2012-244": false,
    "2012-245": false,
    "2012-300": false,
    "2012-301": false,
    "2012-302": false,
    "2012-303": false,
    "2012-304": false,
    "2012-305": false,
    "2012-306": false,
    "2012-307": false,
    "2012-308": false,
    "2012-309": false,
    "2012-311": false,
    "2012-400": false,
    "2012-402": false,
    "2012-404": false,
    "2012-405": false,
    "2012-406": false,
    "2012-407": false,
    "2012-408": false,
    "2012-409": false,
    "2012-410": false,
    "2012-411": false,
    "2012-412": false,
    "2012-413": false,
    "2012-414": false,
    "2012-415": false,
    "2012-500": false,
    "2012-501": false,
    "2012-502": false,
    "2012-503": false,
    "2012-504": false,
    "2012-505": false,
    "2012-506": false,
    "2012-508": false,
    "2012-509": false,
    "2012-510": false,
    "2012-511": false,
    "2012-512": false,
    "2012-513": false,
    "2012-514": false,
    "2012-515": false,
    "2012-516": false,
    "2012-517": false,
    "2012-518": false,
    "2012-519": false,
    "2012-520": false,
    "2012-521": false,
    "2012-522": false,
    "2012-523": false,
    "2012-524": false,
    "2012-600": false,
    "2012-601": false,
    "2012-602": false,
    "2012-603": false,
    "2012-604": false,
    "2012-605": false,
    "2012-700": false,
    "2012-701": false,
    "2012-702": false,
    "2012-703": false,
    "2012-704": false,
    "2012-705": false,
    "2012-706": false,
    "2012-707": false,
    "2012-708": false,
    "2012-709": false,
    "2012-710": false,
    "2012-711": false,
    "2012-712": false,
    "2012-714": false,

    "2011-100": false,
    "2011-101": false,
    "2011-102": false,
    "2011-103": false,
    "2011-104": false,
    "2011-105": false,
    "2011-106": false,
    "2011-107": false,
    "2011-108": false,
    "2011-109": false,
    "2011-110": false,
    "2011-111": false,
    "2011-112": false,
    "2011-113": false,
    "2011-114": false,
    "2011-115": false,
    "2011-116": false,
    "2011-117": false,
    "2011-118": false,
    "2011-119": false,
    "2011-120": false,
    "2011-121": false,
    "2011-122": false,
    "2011-123": false,
    "2011-124": false,
    "2011-125": false,
    "2011-127": false,
    "2011-128": false,
    "2011-129": false,
    "2011-131": false,
    "2011-133": false,
    "2011-136": false,
    "2011-200": false,
    "2011-201": false,
    "2011-202": false,
    "2011-203": false,
    "2011-204": false,
    "2011-205": false,
    "2011-206": false,
    "2011-207": false,
    "2011-208": false,
    "2011-209": false,
    "2011-210": false,
    "2011-211": false,
    "2011-212": false,
    "2011-300": false,
    "2011-302": false,
    "2011-303": false,
    "2011-306": false,
    "2011-307": false,
    "2011-308": false,
    "2011-309": false,
    "2011-310": false,
    "2011-311": false,
    "2011-312": false,
    "2011-313": false,
    "2011-315": false,
    "2011-316": false,
    "2011-317": false,
    "2011-319": false,
    "2011-320": false,
    "2011-321": false,
    "2011-322": false,
    "2011-323": false,
    "2011-400": false,
    "2011-401": false,
    "2011-402": false,
    "2011-403": false,
    "2011-404": false,
    "2011-405": false,
    "2011-406": false,
    "2011-407": false,
    "2011-408": false,
    "2011-409": false,
    "2011-410": false,
    "2011-411": false,
    "2011-412": false,
    "2011-413": false,
    "2011-414": false,
    "2011-415": false,
    "2011-416": false,
    "2011-417": false,
    "2011-418": false,
    "2011-419": false,
    "2011-420": false,
    "2011-421": false,
    "2011-422": false,
    "2011-423": false,
    "2011-500": false,
    "2011-501": false,
    "2011-502": false,
    "2011-503": false,
    "2011-504": false,
    "2011-505": false,
    "2011-506": false,
    "2011-507": false,
    "2011-508": false,
    "2011-509": false,
    "2011-510": false,
    "2011-511": false,
    "2011-512": false,
    "2011-514": false,
    "2011-515": false,
    "2011-516": false,
    "2011-517": false,
    "2011-518": false,
    "2011-519": false,
    "2011-600": false,
    "2011-601": false,

    "2010-010": false,
    "2010-100": false,
    "2010-101": false,
    "2010-102": false,
    "2010-103": false,
    "2010-104": false,
    "2010-105": false,
    "2010-106": false,
    "2010-107": false,
    "2010-108": false,
    "2010-109": false,
    "2010-110": false,
    "2010-111": false,
    "2010-112": false,
    "2010-113": false,
    "2010-114": false,
    "2010-115": false,
    "2010-116": false,
    "2010-117": false,
    "2010-118": false,
    "2010-119": false,
    "2010-120": false,
    "2010-121": false,
    "2010-122": false,
    "2010-123": false,
    "2010-124": false,
    "2010-125": false,
    "2010-127": false,
    "2010-128": false,
    "2010-129": false,
    "2010-130": false,
    "2010-131": false,
    "2010-133": false,
    "2010-134": false,
    "2010-135": false,
    "2010-136": false,
    "2010-137": false,
    "2010-138": false,
    "2010-141": false,
    "2010-144": false,
    "2010-145": false,
    "2010-147": false,
    "2010-200": false,
    "2010-201": false,
    "2010-202": false,
    "2010-203": false,
    "2010-204": false,
    "2010-205": false,
    "2010-206": false,
    "2010-207": false,
    "2010-208": false,
    "2010-209": false,
    "2010-210": false,
    "2010-211": false,
    "2010-300": false,
    "2010-301": false,
    "2010-302": false,
    "2010-303": false,
    "2010-304": false,
    "2010-305": false,
    "2010-306": false,
    "2010-307": false,
    "2010-308": false,
    "2010-309": false,
    "2010-310": false,
    "2010-311": false,
    "2010-312": false,
    "2010-313": false,
    "2010-314": false,
    "2010-315": false,
    "2010-316": false,
    "2010-317": false,
    "2010-400": false,
    "2010-401": false,
    "2010-402": false,
    "2010-403": false,
    "2010-404": false,
    "2010-405": false,
    "2010-407": false,
    "2010-408": false,
    "2010-409": false,
    "2010-410": false,
    "2010-411": false,
    "2010-412": false,
    "2010-413": false,
    "2010-414": false,
    "2010-415": false,
    "2010-416": false,
    "2010-417": false,
    "2010-418": false,
    "2010-419": false,
    "2010-420": false,
    "2010-421": false,
    "2010-422": false,
    "2010-423": false,
    "2010-424": false,
    "2010-425": false,
    "2010-426": false,
    "2010-500": false,
    "2010-501": false,
    "2010-502": false,
    "2010-503": false,
    "2010-504": false,
    "2010-505": false,
    "2010-506": false,
    "2010-507": false,
    "2010-508": false,
    "2010-509": false,
    "2010-510": false,
    "2010-511": false,
    "2010-512": false
}
