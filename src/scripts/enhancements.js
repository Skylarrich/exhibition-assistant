(() => {
  let selectedMonths = [];
  let peopleSortMode = "default";
  let peoplePage = 1;
  const peoplePageSize = 20;
  const entityMetrics = {
    "EVT-000001": { count: null, reason: "官方未公布" },
    "EVT-000002": { count: 184, reason: null },
    "EVT-000003": { count: null, reason: "官方未公布" },
    "EVT-000004": { count: 12, reason: null },
    "EVT-000005": { count: 82, reason: null },
    "EVT-000006": { count: 12, reason: null },
    "EVT-000007": { count: 75, reason: null },
    "EVT-000008": { count: 394, reason: null },
    "EVT-000009": { count: 20, reason: null },
    "EVT-000010": { count: 19, reason: null },
    "EVT-000011": { count: null, reason: "无法核验" },
    "EVT-000012": { count: 3, reason: null },
    "EVT-000013": { count: 5, reason: null },
    "EVT-000014": { count: null, reason: "官方未公布" },
    "EVT-000015": { count: 13, reason: null },
    "EVT-000016": { count: null, reason: "官方未公布" },
    "EVT-000017": { count: 25, reason: null },
    "EVT-000018": { count: null, reason: "官方未公布" },
    "EVT-000019": { count: 248, reason: null },
    "EVT-000020": { count: 84, reason: null },
    "EVT-000021": { count: 18, reason: null },
    "EVT-000022": { count: 44, reason: null },
    "EVT-000023": { count: 64, reason: null },
    "EVT-000024": { count: 14, reason: null },
    "EVT-000025": { count: 74, reason: null },
    "EVT-000026": { count: 1, reason: null },
    "EVT-000027": { count: 46, reason: null },
    "EVT-000028": { count: null, reason: "官方未公布" },
    "EVT-000029": { count: null, reason: "官方未公布" },
    "EVT-000030": { count: 53, reason: null },
    "EVT-000031": { count: 32, reason: null },
    "EVT-000032": { count: null, reason: "官方未公布" },
    "EVT-000033": { count: 123, reason: null },
    "EVT-000034": { count: 154, reason: null },
    "EVT-000035": { count: null, reason: "官方未公布" },
    "EVT-000036": { count: 18, reason: null },
    "EVT-000037": { count: null, reason: "官方未公布" },
    "EVT-000038": { count: 10, reason: null },
    "EVT-000039": { count: 352, reason: null },
    "EVT-000040": { count: 21, reason: null },
    "EVT-000041": { count: null, reason: "官方未公布" },
    "EVT-000042": { count: null, reason: "待核验" },
    "EVT-000043": { count: null, reason: "待核验" },
    "EVT-000044": { count: null, reason: "官方未公布" },
    "EVT-000045": { count: null, reason: "官方未公布" },
    "EVT-000046": { count: null, reason: "官方未公布" },
    "EVT-000047": { count: null, reason: "官方未公布" },
    "EVT-000048": { count: null, reason: "官方未公布" },
    "EVT-000049": { count: null, reason: "官方未公布" },
    "EVT-000050": { count: null, reason: "官方未公布" },
    "EVT-000051": { count: null, reason: "官方未公布" },
    "EVT-000052": { count: null, reason: "官方未公布" },
    "EVT-000053": { count: null, reason: "官方未公布" },
    "EVT-000054": { count: null, reason: "官方未公布" },
    "EVT-000055": { count: null, reason: "官方未公布" },
    "EVT-000056": { count: null, reason: "官方未公布" },
    "EVT-000057": { count: null, reason: "官方未公布" },
    "EVT-000058": { count: null, reason: "官方未公布" },
    "EVT-000059": { count: null, reason: "官方未公布" },
    "EVT-000060": { count: null, reason: "官方未公布" },
    "EVT-000061": { count: null, reason: "官方未公布" },
    "EVT-000062": { count: null, reason: "官方未公布" },
    "EVT-000063": { count: null, reason: "官方未公布" },
    "EVT-000064": { count: null, reason: "官方未公布" },
    "EVT-000065": { count: null, reason: "官方未公布" },
    "EVT-000066": { count: null, reason: "官方未公布" },
    "EVT-000067": { count: 90, reason: null },
    "EVT-000068": { count: null, reason: "官方未公布" },
    "EVT-000069": { count: null, reason: "官方未公布" },
    "EVT-000070": { count: null, reason: "官方未公布" },
    "EVT-000071": { count: null, reason: "官方未公布" },
    "EVT-000072": { count: 41, reason: null },
    "EVT-000073": { count: null, reason: "官方未公布" },
    "EVT-000074": { count: null, reason: "官方未公布" },
    "EVT-000075": { count: null, reason: "官方未公布" },
    "EVT-000076": { count: null, reason: "官方未公布" },
    "EVT-000077": { count: null, reason: "官方未公布" },
    "EVT-000078": { count: null, reason: "官方未公布" },
    "EVT-000079": { count: null, reason: "官方未公布" },
    "EVT-000080": { count: 23, reason: null },
    "EVT-000081": { count: null, reason: "待核验" },
    "EVT-000082": { count: null, reason: "官方未公布" },
    "EVT-000083": { count: null, reason: "待核验" },
    "EVT-000084": { count: null, reason: "待核验" },
    "EVT-000085": { count: null, reason: "待核验" },
    "EVT-000086": { count: null, reason: "待核验" },
    "EVT-000087": { count: null, reason: "待核验" },
    "EVT-000088": { count: null, reason: "待核验" },
    "EVT-000089": { count: null, reason: "待核验" },
    "EVT-000090": { count: null, reason: "待核验" },
    "EVT-000091": { count: null, reason: "官方未公布" },
    "EVT-000092": { count: null, reason: "无法核验" },
    "EVT-000093": { count: null, reason: "官方未公布" },
    "EVT-000094": { count: null, reason: "官方未公布" },
    "EVT-000095": { count: null, reason: "官方未公布" },
    "EVT-000096": { count: null, reason: "官方未公布" },
    "EVT-000097": { count: null, reason: "官方未公布" },
    "EVT-000098": { count: null, reason: "官方未公布" },
    "EVT-000099": { count: null, reason: "官方未公布" },
    "EVT-000100": { count: null, reason: "官方未公布" },
    "EVT-000101": { count: null, reason: "官方未公布" },
    "EVT-000102": { count: null, reason: "官方未公布" },
    "EVT-000103": { count: null, reason: "官方未公布" },
    "EVT-000104": { count: null, reason: "官方未公布" },
    "EVT-000105": { count: null, reason: "官方未公布" },
    "EVT-000106": { count: null, reason: "官方未公布" },
    "EVT-000107": { count: null, reason: "官方未公布" },
    "EVT-000108": { count: null, reason: "官方未公布" },
    "EVT-000109": { count: null, reason: "官方未公布" },
    "EVT-000110": { count: null, reason: "官方未公布" },
    "EVT-000111": { count: null, reason: "官方未公布" },
    "EVT-000112": { count: null, reason: "官方未公布" },
    "EVT-000113": { count: null, reason: "无法核验" },
    "EVT-000114": { count: null, reason: "无法核验" },
    "EVT-000115": { count: null, reason: "官方未公布" },
    "EVT-000116": { count: null, reason: "官方未公布" },
    "EVT-000117": { count: 76, reason: null },
    "EVT-000118": { count: null, reason: "官方未公布" },
    "EVT-000119": { count: null, reason: "官方未公布" },
    "EVT-000120": { count: null, reason: "官方未公布" },
    "EVT-000121": { count: null, reason: "无法核验" },
    "EVT-000122": { count: null, reason: "无法核验" },
    "EVT-000123": { count: null, reason: "官方未公布" },
    "EVT-000124": { count: null, reason: "官方未公布" },
    "EVT-000125": { count: null, reason: "官方未公布" },
    "EVT-000126": { count: null, reason: "官方未公布" },
    "EVT-000127": { count: null, reason: "官方未公布" },
    "EVT-000128": { count: null, reason: "官方未公布" },
    "EVT-000129": { count: null, reason: "官方未公布" },
    "EVT-000130": { count: null, reason: "官方未公布" },
    "EVT-000131": { count: null, reason: "官方未公布" },
    "EVT-000132": { count: null, reason: "官方未公布" },
    "EVT-000133": { count: null, reason: "官方未公布" },
    "EVT-000134": { count: 255, reason: null },
    "EVT-000135": { count: null, reason: "官方未公布" },
    "EVT-000136": { count: null, reason: "官方未公布" },
    "EVT-000137": { count: 30, reason: null },
    "EVT-000138": { count: null, reason: "官方未公布" },
    "EVT-000139": { count: null, reason: "官方未公布" },
    "EVT-000140": { count: null, reason: "官方未公布" },
    "EVT-000141": { count: null, reason: "官方未公布" },
    "EVT-000142": { count: null, reason: "官方未公布" },
    "EVT-000143": { count: null, reason: "官方未公布" },
    "EVT-000144": { count: null, reason: "官方未公布" },
    "EVT-000145": { count: null, reason: "官方未公布" },
    "EVT-000146": { count: null, reason: "官方未公布" },
    "EVT-000147": { count: null, reason: "官方未公布" },
    "EVT-000148": { count: 212, reason: null },
    "EVT-000149": { count: null, reason: "官方未公布" },
    "EVT-000150": { count: null, reason: "官方未公布" },
    "EVT-000151": { count: null, reason: "待核验" },
    "EVT-000152": { count: null, reason: "待核验" },
    "EVT-000153": { count: null, reason: "待核验" },
    "EVT-000154": { count: null, reason: "待核验" },
    "EVT-000155": { count: null, reason: "待核验" },
    "EVT-000156": { count: null, reason: "待核验" },
    "EVT-000157": { count: null, reason: "待核验" },
    "EVT-000158": { count: null, reason: "待核验" },
    "EVT-000159": { count: null, reason: "待核验" },
    "EVT-000160": { count: null, reason: "待核验" },
    "EVT-000161": { count: null, reason: "待核验" },
    "EVT-000162": { count: null, reason: "待核验" },
    "EVT-000163": { count: null, reason: "待核验" },
    "EVT-000164": { count: null, reason: "待核验" },
    "EVT-000165": { count: null, reason: "待核验" },
    "EVT-000166": { count: null, reason: "待核验" },
    "EVT-000167": { count: null, reason: "待核验" },
    "EVT-000168": { count: null, reason: "待核验" },
    "EVT-000169": { count: null, reason: "待核验" },
    "EVT-000170": { count: null, reason: "待核验" },
    "EVT-000171": { count: null, reason: "待核验" },
    "EVT-000172": { count: null, reason: "待核验" },
    "EVT-000173": { count: null, reason: "待核验" },
    "EVT-000174": { count: null, reason: "待核验" },
    "EVT-000175": { count: null, reason: "待核验" },
    "EVT-000176": { count: null, reason: "待核验" },
    "EVT-000177": { count: null, reason: "待核验" },
    "EVT-000178": { count: null, reason: "待核验" },
    "EVT-000179": { count: null, reason: "待核验" },
    "EVT-000180": { count: null, reason: "待核验" },
    "EVT-000181": { count: null, reason: "待核验" },
    "EVT-000182": { count: null, reason: "待核验" },
    "EVT-000183": { count: null, reason: "待核验" },
    "EVT-000184": { count: null, reason: "待核验" },
    "EVT-000185": { count: null, reason: "待核验" },
    "EVT-000186": { count: null, reason: "待核验" },
    "EVT-000187": { count: null, reason: "待核验" },
    "EVT-000188": { count: null, reason: "待核验" },
    "EVT-000189": { count: null, reason: "待核验" },
    "EVT-000190": { count: null, reason: "待核验" },
    "EVT-000191": { count: null, reason: "待核验" },
    "EVT-000192": { count: null, reason: "待核验" },
    "EVT-000193": { count: null, reason: "待核验" },
    "EVT-000194": { count: null, reason: "待核验" },
    "EVT-000195": { count: null, reason: "待核验" },
    "EVT-000196": { count: null, reason: "待核验" },
    "EVT-000197": { count: null, reason: "待核验" },
    "EVT-000198": { count: null, reason: "待核验" },
    "EVT-000199": { count: null, reason: "待核验" },
    "EVT-000200": { count: null, reason: "待核验" },
    "EVT-000201": { count: null, reason: "待核验" },
    "EVT-000202": { count: null, reason: "待核验" },
    "EVT-000203": { count: null, reason: "待核验" },
    "EVT-000204": { count: null, reason: "待核验" },
    "EVT-000205": { count: null, reason: "待核验" },
    "EVT-000206": { count: null, reason: "待核验" },
    "EVT-000207": { count: null, reason: "待核验" },
    "EVT-000208": { count: null, reason: "待核验" },
    "EVT-000209": { count: null, reason: "待核验" },
    "EVT-000210": { count: null, reason: "待核验" },
    "EVT-000211": { count: null, reason: "待核验" },
    "EVT-000212": { count: null, reason: "待核验" },
    "EVT-000213": { count: null, reason: "待核验" },
    "EVT-000214": { count: null, reason: "待核验" },
    "EVT-000215": { count: null, reason: "待核验" },
    "EVT-000216": { count: null, reason: "待核验" },
    "EVT-000217": { count: null, reason: "待核验" },
    "EVT-000218": { count: null, reason: "待核验" },
    "EVT-000219": { count: null, reason: "待核验" },
    "EVT-000220": { count: null, reason: "待核验" },
    "EVT-000221": { count: null, reason: "待核验" },
    "EVT-000222": { count: null, reason: "待核验" },
    "EVT-000223": { count: null, reason: "待核验" },
    "EVT-000224": { count: null, reason: "待核验" },
    "EVT-000225": { count: null, reason: "待核验" },
    "EVT-000226": { count: null, reason: "待核验" },
    "EVT-000227": { count: null, reason: "待核验" },
    "EVT-000228": { count: null, reason: "待核验" },
    "EVT-000229": { count: null, reason: "待核验" },
    "EVT-000230": { count: null, reason: "待核验" },
    "EVT-000231": { count: null, reason: "待核验" },
    "EVT-000232": { count: null, reason: "待核验" },
    "EVT-000233": { count: null, reason: "待核验" },
    "EVT-000234": { count: null, reason: "待核验" },
    "EVT-000235": { count: null, reason: "待核验" },
    "EVT-000236": { count: null, reason: "待核验" },
    "EVT-000237": { count: null, reason: "待核验" },
    "EVT-000238": { count: null, reason: "待核验" },
    "EVT-000239": { count: null, reason: "待核验" },
    "EVT-000240": { count: null, reason: "待核验" },
    "EVT-000241": { count: null, reason: "待核验" },
    "EVT-000242": { count: null, reason: "待核验" },
    "EVT-000243": { count: null, reason: "待核验" },
    "EVT-000244": { count: null, reason: "待核验" },
    "EVT-000245": { count: null, reason: "待核验" },
    "EVT-000246": { count: null, reason: "待核验" },
    "EVT-000247": { count: null, reason: "待核验" },
    "EVT-000248": { count: null, reason: "待核验" },
    "EVT-000249": { count: null, reason: "待核验" },
    "EVT-000250": { count: null, reason: "待核验" },
    "EVT-000251": { count: null, reason: "待核验" },
    "EVT-000252": { count: null, reason: "待核验" },
    "EVT-000253": { count: null, reason: "待核验" },
    "EVT-000254": { count: null, reason: "待核验" },
    "EVT-000255": { count: null, reason: "待核验" },
    "EVT-000256": { count: null, reason: "待核验" },
    "EVT-000257": { count: null, reason: "待核验" },
    "EVT-000258": { count: null, reason: "待核验" },
    "EVT-000259": { count: null, reason: "待核验" },
    "EVT-000260": { count: null, reason: "待核验" },
    "EVT-000261": { count: null, reason: "待核验" },
    "EVT-000262": { count: null, reason: "待核验" },
    "EVT-000263": { count: null, reason: "待核验" },
    "EVT-000264": { count: null, reason: "待核验" },
    "EVT-000265": { count: null, reason: "待核验" },
    "EVT-000266": { count: null, reason: "待核验" },
    "EVT-000267": { count: null, reason: "待核验" },
    "EVT-000268": { count: null, reason: "待核验" },
    "EVT-000269": { count: null, reason: "待核验" },
    "EVT-000270": { count: null, reason: "待核验" },
    "EVT-000271": { count: null, reason: "待核验" },
    "EVT-000272": { count: null, reason: "待核验" },
    "EVT-000273": { count: null, reason: "待核验" },
    "EVT-000274": { count: null, reason: "待核验" },
    "EVT-000275": { count: null, reason: "待核验" },
    "EVT-000276": { count: null, reason: "待核验" },
    "EVT-000277": { count: null, reason: "待核验" },
    "EVT-000278": { count: null, reason: "待核验" },
    "EVT-000279": { count: null, reason: "待核验" },
    "EVT-000280": { count: null, reason: "待核验" },
    "EVT-000281": { count: null, reason: "待核验" },
    "EVT-000282": { count: null, reason: "待核验" },
    "EVT-000283": { count: null, reason: "待核验" },
    "EVT-000284": { count: null, reason: "待核验" },
    "EVT-000285": { count: null, reason: "待核验" },
    "EVT-000286": { count: null, reason: "待核验" },
    "EVT-000287": { count: null, reason: "待核验" },
    "EVT-000288": { count: null, reason: "待核验" },
    "EVT-000289": { count: null, reason: "待核验" },
    "EVT-000290": { count: null, reason: "待核验" },
    "EVT-000291": { count: null, reason: "待核验" },
    "EVT-000292": { count: null, reason: "待核验" },
    "EVT-000293": { count: null, reason: "待核验" },
    "EVT-000294": { count: null, reason: "待核验" },
    "EVT-000295": { count: null, reason: "待核验" },
    "EVT-000296": { count: null, reason: "待核验" },
    "EVT-000297": { count: null, reason: "待核验" },
    "EVT-000298": { count: null, reason: "待核验" },
    "EVT-000299": { count: null, reason: "待核验" },
    "EVT-000300": { count: null, reason: "待核验" },
    "EVT-000301": { count: null, reason: "待核验" },
    "EVT-000302": { count: null, reason: "待核验" },
    "EVT-000303": { count: null, reason: "待核验" },
    "EVT-000304": { count: null, reason: "待核验" },
    "EVT-000305": { count: null, reason: "待核验" },
    "EVT-000306": { count: null, reason: "待核验" },
    "EVT-000307": { count: null, reason: "待核验" },
    "EVT-000308": { count: null, reason: "待核验" },
    "EVT-000309": { count: null, reason: "待核验" },
    "EVT-000310": { count: null, reason: "待核验" },
    "EVT-000311": { count: null, reason: "待核验" },
    "EVT-000312": { count: null, reason: "待核验" },
    "EVT-000313": { count: null, reason: "待核验" },
    "EVT-000314": { count: null, reason: "待核验" },
    "EVT-000315": { count: null, reason: "待核验" },
    "EVT-000316": { count: null, reason: "待核验" },
    "EVT-000317": { count: null, reason: "待核验" },
    "EVT-000318": { count: null, reason: "待核验" },
    "EVT-000319": { count: null, reason: "待核验" },
    "EVT-000320": { count: null, reason: "待核验" },
    "EVT-000321": { count: null, reason: "待核验" },
    "EVT-000322": { count: null, reason: "待核验" },
    "EVT-000323": { count: null, reason: "待核验" },
    "EVT-000324": { count: null, reason: "待核验" },
    "EVT-000325": { count: null, reason: "待核验" },
    "EVT-000326": { count: null, reason: "待核验" },
    "EVT-000327": { count: null, reason: "待核验" },
    "EVT-000328": { count: null, reason: "待核验" },
    "EVT-000329": { count: null, reason: "待核验" },
    "EVT-000330": { count: null, reason: "待核验" },
    "EVT-000331": { count: null, reason: "待核验" },
    "EVT-000332": { count: null, reason: "待核验" },
    "EVT-000333": { count: null, reason: "待核验" },
    "EVT-000334": { count: null, reason: "待核验" },
    "EVT-000335": { count: null, reason: "待核验" },
    "EVT-000336": { count: null, reason: "待核验" },
    "EVT-000337": { count: null, reason: "待核验" },
    "EVT-000338": { count: null, reason: "待核验" },
    "EVT-000339": { count: null, reason: "待核验" },
    "EVT-000340": { count: null, reason: "待核验" },
    "EVT-000341": { count: null, reason: "待核验" },
    "EVT-000342": { count: null, reason: "待核验" },
    "EVT-000343": { count: null, reason: "待核验" },
    "EVT-000344": { count: null, reason: "待核验" },
    "EVT-000345": { count: null, reason: "待核验" },
    "EVT-000346": { count: null, reason: "待核验" },
    "EVT-000347": { count: null, reason: "待核验" },
    "EVT-000348": { count: null, reason: "待核验" },
    "EVT-000349": { count: null, reason: "待核验" },
    "EVT-000350": { count: null, reason: "待核验" },
    "EVT-000351": { count: null, reason: "待核验" },
    "EVT-000352": { count: null, reason: "待核验" },
    "EVT-000353": { count: null, reason: "待核验" },
    "EVT-000354": { count: null, reason: "待核验" },
    "EVT-000355": { count: null, reason: "待核验" },
    "EVT-000356": { count: null, reason: "待核验" },
    "EVT-000357": { count: null, reason: "待核验" },
    "EVT-000358": { count: null, reason: "待核验" },
    "EVT-000359": { count: null, reason: "待核验" },
    "EVT-000360": { count: null, reason: "待核验" },
    "EVT-000361": { count: null, reason: "待核验" },
    "EVT-000362": { count: null, reason: "待核验" },
    "EVT-000363": { count: null, reason: "待核验" },
    "EVT-000364": { count: null, reason: "待核验" },
    "EVT-000365": { count: null, reason: "待核验" },
    "EVT-000366": { count: null, reason: "待核验" },
    "EVT-000367": { count: null, reason: "待核验" },
    "EVT-000368": { count: null, reason: "待核验" },
    "EVT-000369": { count: null, reason: "待核验" },
    "EVT-000370": { count: null, reason: "待核验" },
    "EVT-000371": { count: null, reason: "待核验" },
    "EVT-000372": { count: null, reason: "待核验" },
    "EVT-000373": { count: null, reason: "待核验" },
    "EVT-000374": { count: null, reason: "待核验" },
    "EVT-000375": { count: null, reason: "待核验" },
    "EVT-000376": { count: null, reason: "待核验" },
    "EVT-000377": { count: null, reason: "待核验" },
    "EVT-000378": { count: null, reason: "待核验" },
    "EVT-000379": { count: null, reason: "待核验" },
    "EVT-000380": { count: null, reason: "待核验" },
    "EVT-000381": { count: null, reason: "待核验" },
    "EVT-000382": { count: null, reason: "待核验" },
    "EVT-000383": { count: null, reason: "待核验" },
    "EVT-000384": { count: null, reason: "待核验" },
    "EVT-000385": { count: null, reason: "待核验" },
    "EVT-000386": { count: null, reason: "待核验" },
    "EVT-000387": { count: null, reason: "待核验" },
    "EVT-000388": { count: null, reason: "待核验" },
    "EVT-000389": { count: null, reason: "待核验" },
    "EVT-000390": { count: null, reason: "待核验" },
    "EVT-000391": { count: null, reason: "待核验" },
    "EVT-000392": { count: null, reason: "待核验" },
    "EVT-000393": { count: null, reason: "待核验" },
    "EVT-000394": { count: null, reason: "待核验" },
    "EVT-000395": { count: null, reason: "待核验" },
    "EVT-000396": { count: null, reason: "待核验" },
    "EVT-000397": { count: null, reason: "待核验" },
    "EVT-000398": { count: null, reason: "待核验" },
    "EVT-000399": { count: null, reason: "待核验" },
    "EVT-000400": { count: null, reason: "待核验" },
    "EVT-000401": { count: null, reason: "待核验" },
    "EVT-000402": { count: null, reason: "待核验" },
    "EVT-000403": { count: null, reason: "待核验" },
    "EVT-000404": { count: null, reason: "待核验" },
    "EVT-000405": { count: null, reason: "待核验" },
    "EVT-000406": { count: null, reason: "待核验" },
    "EVT-000407": { count: null, reason: "待核验" },
    "EVT-000408": { count: null, reason: "待核验" },
    "EVT-000409": { count: null, reason: "待核验" },
    "EVT-000410": { count: null, reason: "待核验" },
    "EVT-000411": { count: null, reason: "待核验" },
    "EVT-000412": { count: null, reason: "待核验" },
    "EVT-000413": { count: null, reason: "待核验" },
    "EVT-000414": { count: null, reason: "待核验" },
    "EVT-000415": { count: null, reason: "待核验" },
    "EVT-000416": { count: null, reason: "待核验" },
    "EVT-000417": { count: null, reason: "待核验" },
    "EVT-000418": { count: null, reason: "待核验" },
    "EVT-000419": { count: null, reason: "待核验" },
    "EVT-000420": { count: null, reason: "待核验" },
    "EVT-000421": { count: null, reason: "待核验" },
    "EVT-000422": { count: null, reason: "待核验" },
    "EVT-000423": { count: null, reason: "待核验" },
    "EVT-000424": { count: null, reason: "待核验" },
    "EVT-000425": { count: null, reason: "待核验" },
    "EVT-000426": { count: null, reason: "待核验" },
    "EVT-000427": { count: null, reason: "待核验" },
    "EVT-000428": { count: null, reason: "待核验" },
    "EVT-000429": { count: null, reason: "待核验" },
    "EVT-000430": { count: null, reason: "待核验" },
    "EVT-000431": { count: null, reason: "待核验" },
    "EVT-000432": { count: null, reason: "待核验" },
    "EVT-000433": { count: null, reason: "待核验" },
    "EVT-000434": { count: null, reason: "待核验" },
    "EVT-000435": { count: null, reason: "待核验" },
    "EVT-000436": { count: null, reason: "待核验" },
    "EVT-000437": { count: null, reason: "待核验" },
    "EVT-000438": { count: null, reason: "待核验" },
    "EVT-000439": { count: null, reason: "待核验" },
    "EVT-000440": { count: null, reason: "待核验" },
    "EVT-000441": { count: null, reason: "待核验" },
    "EVT-000442": { count: null, reason: "待核验" },
    "EVT-000443": { count: null, reason: "待核验" },
    "EVT-000444": { count: null, reason: "待核验" },
    "EVT-000445": { count: null, reason: "待核验" },
    "EVT-000446": { count: null, reason: "待核验" },
    "EVT-000447": { count: null, reason: "待核验" },
    "EVT-000448": { count: null, reason: "待核验" },
    "EVT-000449": { count: null, reason: "待核验" },
    "EVT-000450": { count: null, reason: "待核验" },
    "EVT-000451": { count: null, reason: "待核验" },
    "EVT-000452": { count: null, reason: "待核验" },
    "EVT-000453": { count: null, reason: "待核验" },
    "EVT-000454": { count: null, reason: "待核验" },
    "EVT-000455": { count: null, reason: "待核验" },
    "EVT-000456": { count: null, reason: "待核验" },
    "EVT-000457": { count: null, reason: "待核验" },
    "EVT-000458": { count: null, reason: "待核验" },
    "EVT-000459": { count: null, reason: "待核验" },
    "EVT-000460": { count: null, reason: "待核验" },
    "EVT-000461": { count: null, reason: "待核验" },
    "EVT-000462": { count: null, reason: "待核验" },
    "EVT-000463": { count: null, reason: "待核验" },
    "EVT-000464": { count: null, reason: "待核验" },
    "EVT-000465": { count: null, reason: "待核验" },
    "EVT-000466": { count: null, reason: "待核验" },
    "EVT-000467": { count: null, reason: "待核验" },
    "EVT-000468": { count: null, reason: "待核验" },
    "EVT-000469": { count: null, reason: "待核验" },
    "EVT-000470": { count: null, reason: "待核验" },
    "EVT-000471": { count: null, reason: "待核验" },
    "EVT-000472": { count: null, reason: "待核验" },
    "EVT-000473": { count: null, reason: "待核验" },
    "EVT-000474": { count: null, reason: "待核验" },
    "EVT-000475": { count: null, reason: "待核验" },
    "EVT-000476": { count: null, reason: "待核验" },
    "EVT-000477": { count: null, reason: "待核验" },
    "EVT-000478": { count: null, reason: "待核验" },
    "EVT-000479": { count: null, reason: "待核验" },
    "EVT-000480": { count: null, reason: "待核验" },
    "EVT-000481": { count: null, reason: "待核验" },
    "EVT-000482": { count: null, reason: "待核验" },
    "EVT-000483": { count: null, reason: "待核验" },
    "EVT-000484": { count: null, reason: "待核验" },
    "EVT-000485": { count: null, reason: "待核验" },
    "EVT-000486": { count: null, reason: "待核验" },
    "EVT-000487": { count: null, reason: "待核验" },
    "EVT-000488": { count: null, reason: "待核验" },
    "EVT-000489": { count: null, reason: "待核验" },
    "EVT-000490": { count: null, reason: "待核验" },
    "EVT-000491": { count: null, reason: "待核验" },
    "EVT-000492": { count: null, reason: "待核验" },
    "EVT-000493": { count: null, reason: "待核验" },
    "EVT-000494": { count: null, reason: "待核验" },
    "EVT-000495": { count: null, reason: "待核验" },
    "EVT-000496": { count: null, reason: "待核验" },
    "EVT-000497": { count: null, reason: "待核验" },
    "EVT-000498": { count: null, reason: "待核验" },
    "EVT-000499": { count: null, reason: "待核验" },
    "EVT-000500": { count: null, reason: "待核验" },
    "EVT-000501": { count: null, reason: "待核验" },
    "EVT-000502": { count: null, reason: "待核验" },
    "EVT-000503": { count: null, reason: "待核验" },
    "EVT-000504": { count: null, reason: "待核验" },
    "EVT-000505": { count: null, reason: "待核验" },
    "EVT-000506": { count: null, reason: "待核验" },
    "EVT-000507": { count: null, reason: "待核验" },
    "EVT-000508": { count: null, reason: "待核验" },
    "EVT-000509": { count: null, reason: "待核验" },
    "EVT-000510": { count: null, reason: "待核验" },
    "EVT-000511": { count: null, reason: "待核验" },
    "EVT-000512": { count: null, reason: "待核验" },
    "EVT-000513": { count: null, reason: "待核验" },
    "EVT-000514": { count: null, reason: "待核验" },
    "EVT-000515": { count: null, reason: "待核验" },
    "EVT-000516": { count: null, reason: "待核验" },
    "EVT-000517": { count: null, reason: "待核验" },
    "EVT-000518": { count: null, reason: "待核验" },
    "EVT-000519": { count: null, reason: "待核验" },
    "EVT-000520": { count: null, reason: "待核验" },
    "EVT-000521": { count: null, reason: "待核验" },
    "EVT-000522": { count: null, reason: "待核验" },
    "EVT-000523": { count: null, reason: "待核验" },
    "EVT-000524": { count: null, reason: "待核验" },
    "EVT-000525": { count: null, reason: "待核验" },
    "EVT-000526": { count: null, reason: "待核验" },
    "EVT-000527": { count: null, reason: "待核验" },
    "EVT-000528": { count: null, reason: "待核验" },
    "EVT-000529": { count: null, reason: "待核验" },
    "EVT-000530": { count: null, reason: "待核验" },
    "EVT-000531": { count: null, reason: "待核验" },
    "EVT-000532": { count: null, reason: "待核验" },
    "EVT-000533": { count: null, reason: "待核验" },
    "EVT-000534": { count: null, reason: "待核验" },
    "EVT-000535": { count: null, reason: "待核验" },
    "EVT-000536": { count: null, reason: "待核验" },
    "EVT-000537": { count: null, reason: "待核验" },
    "EVT-000538": { count: null, reason: "待核验" },
    "EVT-000539": { count: null, reason: "待核验" },
    "EVT-000540": { count: null, reason: "待核验" },
    "EVT-000541": { count: null, reason: "待核验" },
    "EVT-000542": { count: null, reason: "待核验" },
    "EVT-000543": { count: null, reason: "待核验" },
    "EVT-000544": { count: null, reason: "待核验" },
    "EVT-000545": { count: null, reason: "待核验" },
    "EVT-000546": { count: null, reason: "待核验" },
    "EVT-000547": { count: null, reason: "待核验" },
    "EVT-000548": { count: null, reason: "待核验" },
    "EVT-000549": { count: null, reason: "待核验" },
    "EVT-000550": { count: null, reason: "待核验" },
    "EVT-000551": { count: null, reason: "待核验" },
    "EVT-000552": { count: null, reason: "待核验" },
    "EVT-000553": { count: null, reason: "待核验" },
    "EVT-000554": { count: null, reason: "待核验" },
    "EVT-000555": { count: null, reason: "待核验" },
    "EVT-000556": { count: null, reason: "待核验" },
    "EVT-000557": { count: null, reason: "待核验" },
    "EVT-000558": { count: null, reason: "待核验" },
    "EVT-000559": { count: null, reason: "待核验" },
    "EVT-000560": { count: null, reason: "待核验" },
    "EVT-000561": { count: null, reason: "待核验" },
    "EVT-000562": { count: null, reason: "待核验" },
    "EVT-000563": { count: null, reason: "待核验" },
    "EVT-000564": { count: null, reason: "待核验" },
    "EVT-000565": { count: null, reason: "待核验" },
    "EVT-000566": { count: null, reason: "待核验" },
    "EVT-000567": { count: null, reason: "待核验" },
    "EVT-000568": { count: null, reason: "待核验" },
    "EVT-000569": { count: null, reason: "待核验" },
    "EVT-000570": { count: null, reason: "待核验" },
    "EVT-000571": { count: null, reason: "待核验" },
    "EVT-000572": { count: null, reason: "待核验" },
    "EVT-000573": { count: null, reason: "待核验" },
    "EVT-000574": { count: null, reason: "待核验" },
    "EVT-000575": { count: null, reason: "待核验" },
    "EVT-000576": { count: null, reason: "待核验" },
    "EVT-000577": { count: null, reason: "待核验" },
    "EVT-000578": { count: null, reason: "待核验" },
    "EVT-000579": { count: null, reason: "待核验" },
    "EVT-000580": { count: null, reason: "待核验" },
    "EVT-000581": { count: null, reason: "待核验" },
    "EVT-000582": { count: null, reason: "待核验" },
    "EVT-000583": { count: null, reason: "待核验" },
    "EVT-000584": { count: null, reason: "待核验" },
    "EVT-000585": { count: null, reason: "待核验" },
    "EVT-000586": { count: null, reason: "待核验" },
    "EVT-000587": { count: null, reason: "待核验" },
    "EVT-000588": { count: null, reason: "待核验" },
    "EVT-000589": { count: null, reason: "待核验" },
    "EVT-000590": { count: null, reason: "待核验" },
    "EVT-000591": { count: null, reason: "待核验" },
    "EVT-000592": { count: null, reason: "待核验" },
    "EVT-000593": { count: null, reason: "待核验" },
    "EVT-000594": { count: null, reason: "待核验" },
    "EVT-000595": { count: null, reason: "待核验" },
    "EVT-000596": { count: null, reason: "待核验" },
    "EVT-000597": { count: null, reason: "待核验" },
    "EVT-000598": { count: null, reason: "待核验" },
  };
  const peopleMetrics = {
    "EVT-000001": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000002": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 441,
      visitorReason: null,
    },
    "EVT-000003": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000004": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000005": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 1600,
      visitorReason: null,
    },
    "EVT-000006": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000007": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000008": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 8300,
      visitorReason: null,
    },
    "EVT-000009": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000010": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方数字存在冲突",
    },
    "EVT-000011": {
      exhibitorCount: null,
      exhibitorReason: "无法核验",
      visitorCount: null,
      visitorReason: "无法核验",
    },
    "EVT-000012": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000013": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000014": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000015": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000016": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000017": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "本届未公布",
    },
    "EVT-000018": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000019": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000020": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 1000,
      visitorReason: null,
    },
    "EVT-000021": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 650,
      visitorReason: null,
    },
    "EVT-000022": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000023": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 1800,
      visitorReason: null,
    },
    "EVT-000024": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000025": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000026": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000027": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 1800,
      visitorReason: null,
    },
    "EVT-000028": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000029": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000030": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000031": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 1200,
      visitorReason: null,
    },
    "EVT-000032": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 6200,
      visitorReason: null,
    },
    "EVT-000033": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 4000,
      visitorReason: null,
    },
    "EVT-000034": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 8000,
      visitorReason: null,
    },
    "EVT-000035": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "本届未公布",
    },
    "EVT-000036": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 2000,
      visitorReason: null,
    },
    "EVT-000037": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000038": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "本届未公布",
    },
    "EVT-000039": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "本届未公布",
    },
    "EVT-000040": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 600,
      visitorReason: null,
    },
    "EVT-000041": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 1000,
      visitorReason: null,
    },
    "EVT-000042": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000043": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000044": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 600,
      visitorReason: null,
    },
    "EVT-000045": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 1500,
      visitorReason: null,
    },
    "EVT-000046": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 1800,
      visitorReason: null,
    },
    "EVT-000047": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000048": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 20000,
      visitorReason: null,
    },
    "EVT-000049": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 25000,
      visitorReason: null,
    },
    "EVT-000050": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000051": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 40000,
      visitorReason: null,
    },
    "EVT-000052": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000053": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000054": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000055": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 4500,
      visitorReason: null,
    },
    "EVT-000056": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000057": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000058": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000059": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000060": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 2000,
      visitorReason: null,
    },
    "EVT-000061": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000062": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 45000,
      visitorReason: null,
    },
    "EVT-000063": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000064": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000065": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 70000,
      visitorReason: null,
    },
    "EVT-000066": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000067": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 6000,
      visitorReason: null,
    },
    "EVT-000068": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 400,
      visitorReason: null,
    },
    "EVT-000069": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000070": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000071": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000072": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000073": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000074": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000075": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000076": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 400,
      visitorReason: null,
    },
    "EVT-000077": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 5500,
      visitorReason: null,
    },
    "EVT-000078": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000079": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 150,
      visitorReason: null,
    },
    "EVT-000080": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 8000,
      visitorReason: null,
    },
    "EVT-000081": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000082": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000083": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000084": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000085": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000086": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000087": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000088": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000089": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000090": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000091": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000092": {
      exhibitorCount: null,
      exhibitorReason: "无法核验",
      visitorCount: null,
      visitorReason: "无法核验",
    },
    "EVT-000093": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 20000,
      visitorReason: null,
    },
    "EVT-000094": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 4000,
      visitorReason: null,
    },
    "EVT-000095": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 600,
      visitorReason: null,
    },
    "EVT-000096": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "本届未公布",
    },
    "EVT-000097": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 5000,
      visitorReason: null,
    },
    "EVT-000098": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000099": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000100": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000101": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000102": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000103": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000104": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000105": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000106": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000107": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000108": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000109": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000110": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000111": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000112": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000113": {
      exhibitorCount: null,
      exhibitorReason: "无法核验",
      visitorCount: null,
      visitorReason: "无法核验",
    },
    "EVT-000114": {
      exhibitorCount: null,
      exhibitorReason: "无法核验",
      visitorCount: null,
      visitorReason: "无法核验",
    },
    "EVT-000115": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 6250,
      visitorReason: null,
    },
    "EVT-000116": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 500,
      visitorReason: null,
    },
    "EVT-000117": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000118": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000119": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000120": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000121": {
      exhibitorCount: null,
      exhibitorReason: "无法核验",
      visitorCount: null,
      visitorReason: "无法核验",
    },
    "EVT-000122": {
      exhibitorCount: null,
      exhibitorReason: "无法核验",
      visitorCount: null,
      visitorReason: "无法核验",
    },
    "EVT-000123": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000124": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000125": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000126": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 80,
      visitorReason: null,
    },
    "EVT-000127": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 250,
      visitorReason: null,
    },
    "EVT-000128": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000129": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000130": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000131": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 9000,
      visitorReason: null,
    },
    "EVT-000132": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000133": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 250,
      visitorReason: null,
    },
    "EVT-000134": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000135": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000136": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 2000,
      visitorReason: null,
    },
    "EVT-000137": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000138": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 250,
      visitorReason: null,
    },
    "EVT-000139": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: 130,
      visitorReason: null,
    },
    "EVT-000140": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000141": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000142": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000143": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000144": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000145": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000146": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000147": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000148": {
      exhibitorCount: null,
      exhibitorReason: "官网只公布参展企业数，未公布参展人员数",
      visitorCount: 350,
      visitorReason: null,
    },
    "EVT-000149": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000150": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "官方未公布",
    },
    "EVT-000151": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000152": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000153": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000154": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000155": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000156": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000157": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000158": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000159": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000160": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000161": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000162": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000163": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000164": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000165": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000166": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000167": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000168": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000169": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000170": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000171": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000172": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000173": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000174": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000175": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000176": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000177": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000178": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000179": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000180": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000181": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000182": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000183": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000184": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000185": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000186": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000187": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000188": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000189": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000190": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000191": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000192": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000193": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000194": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000195": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000196": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000197": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000198": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000199": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000200": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000201": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000202": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000203": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000204": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000205": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000206": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000207": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000208": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000209": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000210": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000211": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000212": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000213": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000214": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000215": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000216": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000217": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000218": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000219": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000220": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000221": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000222": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000223": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000224": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000225": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000226": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000227": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000228": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000229": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000230": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000231": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000232": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000233": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000234": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000235": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000236": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000237": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000238": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000239": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000240": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000241": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000242": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000243": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000244": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000245": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000246": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000247": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000248": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000249": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000250": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000251": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000252": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000253": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000254": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000255": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000256": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000257": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000258": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000259": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000260": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000261": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000262": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000263": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000264": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000265": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000266": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000267": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000268": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000269": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000270": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000271": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000272": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000273": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000274": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000275": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000276": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000277": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000278": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000279": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000280": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000281": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000282": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000283": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000284": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000285": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000286": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000287": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000288": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000289": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000290": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000291": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000292": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000293": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000294": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000295": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000296": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000297": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000298": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000299": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000300": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000301": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000302": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000303": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000304": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000305": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000306": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000307": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000308": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000309": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000310": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000311": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000312": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000313": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000314": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000315": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000316": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000317": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000318": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000319": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000320": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000321": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000322": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000323": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000324": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000325": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000326": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000327": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000328": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000329": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000330": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000331": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000332": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000333": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000334": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000335": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000336": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000337": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000338": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000339": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000340": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000341": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000342": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000343": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000344": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000345": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000346": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000347": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000348": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000349": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000350": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000351": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000352": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000353": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000354": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000355": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000356": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000357": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000358": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000359": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000360": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000361": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000362": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000363": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000364": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000365": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000366": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000367": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000368": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000369": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000370": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000371": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000372": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000373": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000374": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000375": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000376": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000377": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000378": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000379": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000380": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000381": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000382": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000383": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000384": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000385": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000386": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000387": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000388": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000389": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000390": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000391": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000392": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000393": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000394": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000395": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000396": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000397": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000398": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000399": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000400": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000401": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000402": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000403": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000404": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000405": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000406": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000407": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000408": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000409": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000410": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000411": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000412": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000413": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000414": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000415": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000416": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000417": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000418": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000419": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000420": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000421": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000422": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000423": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000424": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000425": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000426": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000427": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000428": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000429": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000430": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000431": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000432": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000433": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000434": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000435": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000436": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000437": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000438": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000439": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000440": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000441": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000442": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000443": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000444": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000445": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000446": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000447": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000448": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000449": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000450": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000451": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000452": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000453": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000454": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000455": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000456": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000457": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000458": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000459": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000460": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000461": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000462": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000463": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000464": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000465": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000466": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000467": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000468": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000469": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000470": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000471": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000472": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000473": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000474": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000475": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000476": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000477": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000478": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000479": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000480": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000481": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000482": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000483": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000484": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000485": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000486": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000487": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000488": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000489": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000490": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000491": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000492": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000493": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000494": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000495": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000496": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000497": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000498": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000499": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000500": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000501": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000502": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000503": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000504": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000505": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000506": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000507": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000508": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000509": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000510": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000511": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000512": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000513": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000514": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000515": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000516": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000517": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000518": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000519": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000520": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000521": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000522": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000523": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000524": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000525": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000526": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000527": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000528": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000529": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000530": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000531": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000532": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000533": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000534": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000535": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000536": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000537": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000538": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000539": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000540": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000541": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000542": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000543": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000544": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000545": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000546": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000547": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000548": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000549": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000550": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000551": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000552": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000553": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000554": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000555": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000556": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000557": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000558": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000559": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000560": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000561": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000562": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000563": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000564": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000565": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000566": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000567": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000568": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000569": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000570": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000571": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000572": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000573": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000574": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000575": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000576": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000577": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000578": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000579": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000580": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000581": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000582": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000583": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000584": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000585": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000586": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000587": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000588": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000589": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000590": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000591": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000592": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000593": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000594": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000595": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000596": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000597": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
    "EVT-000598": {
      exhibitorCount: null,
      exhibitorReason: "官方未公布",
      visitorCount: null,
      visitorReason: "待核验",
    },
  };
  const getAppFiber = () => {
    const root = document.getElementById("root");
    const rootKey = Object.keys(root || {}).find((key) =>
      key.startsWith("__reactContainer$"),
    );
    const visit = (fiber) => {
      if (!fiber) return null;
      if (fiber.type?.name === "mp") return fiber;
      return visit(fiber.child) || visit(fiber.sibling);
    };
    const containerFiber = root?.[rootKey];
    return visit(containerFiber?.stateNode?.current || containerFiber);
  };
  const getCurrentResultEvents = () => {
    const fiber = getAppFiber();
    for (let hook = fiber?.memoizedState; hook; hook = hook.next) {
      const value = hook.memoizedState;
      const events = Array.isArray(value) ? value[0] : null;
      if (
        Array.isArray(events) &&
        events.some((event) => event?.key && event?.start && event?.name)
      )
        return events;
    }
    return [];
  };
  const getCurrentFilters = () => {
    let hook = getAppFiber()?.memoizedState;
    for (let index = 0; hook && index < 3; index += 1) hook = hook.next;
    return hook?.memoizedState || {};
  };
  const getPeopleMetric = (event, type) => {
    const metric =
      type === "entity"
        ? entityMetrics[event?.key] || {}
        : peopleMetrics[event?.key] || {};
    if (type === "entity")
      return {
        count: Number.isInteger(metric.count) ? metric.count : null,
        text: Number.isInteger(metric.count)
          ? String(metric.count) + "+"
          : metric.reason || "官方未公布",
      };
    const count = metric[`${type}Count`];
    return {
      count: Number.isInteger(count) ? count : null,
      text: Number.isInteger(count)
        ? String(count) + "+"
        : metric[`${type}Reason`] || "官方未公布",
    };
  };
  const sortPeopleEvents = (events) => {
    if (peopleSortMode === "default") return [...events];
    const [type, direction] = peopleSortMode.split("-");
    return events
      .map((event, index) => ({
        event,
        index,
        value: getPeopleMetric(event, type).count,
      }))
      .sort((left, right) => {
        if (left.value === null && right.value === null)
          return left.index - right.index;
        if (left.value === null) return 1;
        if (right.value === null) return -1;
        const difference =
          direction === "asc"
            ? left.value - right.value
            : right.value - left.value;
        return difference || left.index - right.index;
      })
      .map(({ event }) => event);
  };
  const mountPeopleSort = (resultBar) => {
    if (!resultBar || resultBar.querySelector(".peopleSort")) return;
    const label = document.createElement("label");
    label.className = "peopleSort";
    label.innerHTML =
      '<span>排序</span><select aria-label="展会规模排序"><option value="default">默认排序</option><option value="visitor-desc">观展人数：从多到少</option><option value="visitor-asc">观展人数：从少到多</option><option value="exhibitor-desc">参展人数：从多到少</option><option value="exhibitor-asc">参展人数：从少到多</option><option value="entity-desc">企业/实体数量：从多到少</option><option value="entity-asc">企业/实体数量：从少到多</option></select>';
    const select = label.querySelector("select");
    select.value = peopleSortMode;
    select.addEventListener("change", () => {
      peopleSortMode = select.value;
      peoplePage = 1;
      renderMultiResults(true);
    });
    resultBar.append(label);
  };
  const addPeoplePreview = (card, event) => {
    const titleBlock = card?.querySelector(".cardTop > div");
    if (!titleBlock || titleBlock.querySelector(".peoplePreview")) return;
    const exhibitor = getPeopleMetric(event, "exhibitor");
    const visitor = getPeopleMetric(event, "visitor");
    const entity = getPeopleMetric(event, "entity");
    const preview = document.createElement("div");
    preview.className = "peoplePreview";
    preview.innerHTML = `<span><b>参展人数</b><em>${exhibitor.text}</em></span><span><b>观展人数</b><em>${visitor.text}</em></span><span><b>企业/实体</b><em>${entity.text}</em></span>`;
    titleBlock.append(preview);
  };
  const enhancePeopleCards = () => {
    const events = getCurrentResultEvents();
    const byName = new Map(events.map((event) => [event.name, event]));
    document
      .querySelectorAll(".card:not([data-people-enhanced])")
      .forEach((card) => {
        const event = byName.get(card.querySelector("h2")?.textContent.trim());
        if (!event) return;
        addPeoplePreview(card, event);
        card.dataset.peopleEnhanced = "true";
      });
    if (peopleSortMode === "default" && !hasMultiFilters())
      mountPeopleSort(document.querySelector(".toolbar > .resultBar"));
  };
  const getEventGrade = (event, brand) =>
    event.analyses?.[brand]?.grade?.match(/[ABC]/)?.[0] || "—";
  const getMatchedBrand = (event, filters) => {
    const candidates =
      filters.brand && event.brands.includes(filters.brand)
        ? [filters.brand]
        : event.brands;
    return filters.grade
      ? candidates.find(
          (brand) => getEventGrade(event, brand) === filters.grade,
        )
      : candidates[0];
  };
  const openEventDetail = async (event) => {
    try {
      const detail = event.detailPath
        ? await fetch(event.detailPath, { cache: "default" }).then(
            (response) => {
              if (!response.ok)
                throw new Error(`详情加载失败 ${response.status}`);
              return response.json();
            },
          )
        : event;
      const fiber = getAppFiber();
      let hook = fiber?.memoizedState;
      for (let index = 0; hook && index < 5; index += 1) hook = hook.next;
      hook?.queue?.dispatch?.({ ...event, ...detail });
      hook = hook?.next;
      hook?.queue?.dispatch?.(event.brands?.[0] || "SMSBoosting");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      window.alert("详情加载失败，请稍后重试");
    }
  };
  const getFavoritesHook = () => {
    let hook = getAppFiber()?.memoizedState;
    for (let index = 0; hook && index < 7; index += 1) hook = hook.next;
    return hook;
  };
  const syncFilterFavoriteButtons = (eventKey, favorite) => {
    document.querySelectorAll(".filterFavorite").forEach((button) => {
      if (button.dataset.eventKey !== eventKey) return;
      button.textContent = favorite ? "★" : "☆";
      button.setAttribute("aria-pressed", String(favorite));
      button.setAttribute("aria-label", favorite ? "取消收藏" : "加入收藏");
      button.title = favorite ? "取消收藏" : "加入收藏";
    });
  };
  const addFilterFavoriteButton = (card, event) => {
    const hook = getFavoritesHook();
    const favorites = Array.isArray(hook?.memoizedState)
      ? hook.memoizedState
      : [];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "roundBtn filterFavorite";
    button.dataset.eventKey = event.key;
    const favorite = favorites.includes(event.key);
    button.textContent = favorite ? "★" : "☆";
    button.setAttribute("aria-pressed", String(favorite));
    button.setAttribute("aria-label", favorite ? "取消收藏" : "加入收藏");
    button.title = favorite ? "取消收藏" : "加入收藏";
    button.addEventListener("click", (clickEvent) => {
      clickEvent.preventDefault();
      clickEvent.stopPropagation();
      const currentHook = getFavoritesHook();
      const current = Array.isArray(currentHook?.memoizedState)
        ? currentHook.memoizedState
        : [];
      const wasFavorite = current.includes(event.key);
      const next = wasFavorite
        ? current.filter((key) => key !== event.key)
        : [...current, event.key];
      currentHook?.queue?.dispatch?.(next);
      localStorage.setItem(
        "exhibition-assistant-favorites-v1",
        JSON.stringify(next),
      );
      syncFilterFavoriteButtons(event.key, !wasFavorite);
    });
    card.append(button);
  };
  const renderMonthCards = () => {
    const toolbar = document.querySelector(".toolbar");
    const filters = getCurrentFilters();
    const events = getCurrentResultEvents().filter((event) => {
      if (!selectedMonths.includes(event.start.slice(0, 7).replace("-", ".")))
        return false;
      return !filters.grade || Boolean(getMatchedBrand(event, filters));
    });
    const signature =
      JSON.stringify(filters) +
      "|" +
      events.map((event) => event.key).join("|");
    const monthKey = selectedMonths.join("|");
    const existing = document.getElementById("month-filter-results");
    if (!toolbar) {
      existing?.remove();
      if (!selectedMonths.length) {
        document.querySelector("#search-results")?.removeAttribute("hidden");
        document.querySelector(".pagination")?.removeAttribute("hidden");
      }
      return;
    }
    document.querySelector(".monthEventPanel")?.setAttribute("hidden", "");
    if (
      existing?.dataset.months === monthKey &&
      existing.dataset.signature === signature
    )
      return;
    existing?.remove();
    document
      .querySelector("#search-results")
      ?.toggleAttribute("hidden", Boolean(selectedMonths.length));
    document
      .querySelector(".pagination")
      ?.toggleAttribute("hidden", Boolean(selectedMonths.length));
    if (!selectedMonths.length) return;

    const results = document.createElement("section");
    results.id = "month-filter-results";
    results.className = "monthFilterResults";
    results.dataset.months = monthKey;
    results.dataset.signature = signature;
    const criteria = [
      filters.grade ? "推荐等级 " + filters.grade : "",
      selectedMonths.length ? "月份 " + selectedMonths.join("、") : "",
    ]
      .filter(Boolean)
      .join(" ＋ ");
    results.innerHTML = events.length
      ? '<div class="resultBar"><span>' +
        criteria +
        "：找到 <strong>" +
        events.length +
        '</strong> 场活动</span></div><div class="grid"></div>'
      : '<div class="empty">当前复合筛选条件下，所选月份没有展会。</div>';
    const grid = results.querySelector(".grid");
    events.forEach((event) => {
      const card = document.createElement("article");
      const name = event.name;
      const facts =
        event.end && event.end !== event.start
          ? event.start + " 至 " + event.end
          : event.start;
      const location = [event.city, event.country].filter(Boolean).join("，");
      const brands = event.brands.join("、");
      const matchedBrand = getMatchedBrand(event, filters) || event.brands[0];
      const grade = getEventGrade(event, matchedBrand);
      card.className = "card monthFilterCard";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "查看" + name + "详情");
      card.innerHTML =
        '<div class="cardTop"><div><div class="meta compact"><span class="pill"></span><span class="pill matchedBrand"></span></div><h2></h2></div><span class="grade"></span></div><div class="eventFacts"><span></span><span></span></div><div class="meta"><span class="pill light"></span></div><p class="summary"></p><div class="cardActions"><span class="linkBtn">查看详情 →</span></div>';
      card.querySelector(".pill").textContent = event.type || "活动";
      card.querySelector(".matchedBrand").textContent =
        matchedBrand || "品牌待确认";
      card.querySelector(".grade").textContent = grade;
      card
        .querySelector(".grade")
        .classList.add("grade-" + grade.toLowerCase());
      card.querySelector("h2").textContent = name;
      card.querySelector(".eventFacts span:first-child").textContent = facts;
      card.querySelector(".eventFacts span:nth-child(2)").textContent =
        location;
      card.querySelector(".pill.light").textContent = brands;
      card.querySelector(".summary").textContent =
        event.description || "点击查看完整详情";
      addPeoplePreview(card, event);
      card.dataset.peopleEnhanced = "true";
      addFilterFavoriteButton(card, event);
      const open = () => openEventDetail(event);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      });
      grid?.append(card);
    });
    toolbar.insertAdjacentElement("afterend", results);
  };
  const monthFilter = () => {
    const filters = document.querySelector(".filters");
    const rail = document.querySelector(".monthRail");
    if (!filters || !rail || filters.querySelector(".monthFilter")) return;

    const label = document.createElement("label");
    label.className = "filter monthFilter";
    label.innerHTML =
      '<span>月份（可多选）</span><select multiple size="4" aria-label="按月份筛选展会"><option value="">全部月份</option></select><small class="monthFilterHint">按 Ctrl / Cmd 可连续选择多个月份</small>';
    const select = label.querySelector("select");
    const stops = [...rail.querySelectorAll(".monthStop")];

    stops.forEach((stop) => {
      const month = stop.querySelector("span")?.textContent.trim();
      const count = stop.querySelector("b")?.textContent.trim();
      if (!month) return;
      const option = document.createElement("option");
      option.value = month;
      option.textContent = count ? `${month}（${count}）` : month;
      select.append(option);
    });

    const sync = () =>
      [...select.options].forEach((option) => {
        option.selected = selectedMonths.length
          ? selectedMonths.includes(option.value)
          : option.value === "";
      });
    select.addEventListener("change", () => {
      const values = [...select.selectedOptions].map((option) => option.value);
      selectedMonths = values.includes("") ? [] : values;
      document.querySelector(".monthClose")?.click();
      sync();
      window.setTimeout(renderMonthCards, 0);
    });
    if (!rail.dataset.monthFilterBound) {
      rail.dataset.monthFilterBound = "true";
      rail.addEventListener(
        "click",
        (event) => {
          const stop = event.target.closest(".monthStop");
          if (!stop) return;
          event.preventDefault();
          event.stopPropagation();
          selectedMonths = [
            stop.querySelector("span")?.textContent.trim(),
          ].filter(Boolean);
          document.querySelector(".monthClose")?.click();
          window.setTimeout(() => {
            const currentSelect = document.querySelector(".monthFilter select");
            [...(currentSelect?.options || [])].forEach((option) => {
              option.selected = selectedMonths.includes(option.value);
            });
            renderMonthCards();
          }, 0);
        },
        true,
      );
    }
    sync();
    filters.insertBefore(
      label,
      filters.querySelector(".filter:nth-child(5)") || null,
    );
  };
  const multiSelections = Object.fromEntries(
    ["brand", "continent", "country", "city", "month", "type", "grade"].map(
      (key) => [key, new Set()],
    ),
  );
  const continentCountries = {
    亚洲: [
      "中国",
      "中国香港",
      "中国台湾",
      "新加坡",
      "印度",
      "日本",
      "韩国",
      "阿联酋",
      "印度尼西亚",
      "菲律宾",
      "泰国",
      "马来西亚",
      "阿曼",
      "卡塔尔",
      "沙特阿拉伯",
      "斯里兰卡",
      "越南",
      "土耳其",
      "乌兹别克斯坦",
      "东南亚地区",
    ],
    欧洲: [
      "英国",
      "德国",
      "法国",
      "葡萄牙",
      "意大利",
      "西班牙",
      "荷兰",
      "爱尔兰",
      "瑞士",
      "奥地利",
      "比利时",
      "丹麦",
      "波兰",
      "捷克",
      "保加利亚",
      "罗马尼亚",
      "塞尔维亚",
      "卢森堡",
      "立陶宛",
      "欧洲多国",
    ],
    北美洲: [
      "美国",
      "加拿大",
      "墨西哥",
      "多米尼加共和国",
      "危地马拉",
      "哥斯达黎加",
      "巴拿马",
      "加勒比地区",
    ],
    南美洲: [
      "巴西",
      "阿根廷",
      "哥伦比亚",
      "智利",
      "秘鲁",
      "厄瓜多尔",
      "巴拉圭",
      "法属圭亚那",
      "拉丁美洲地区",
    ],
    非洲: ["南非", "肯尼亚", "尼日利亚", "卢旺达"],
    大洋洲: [
      "澳大利亚",
      "新西兰",
      "斐济",
      "新喀里多尼亚",
      "法属波利尼西亚",
      "太平洋岛屿地区",
      "大洋洲地区",
    ],
  };
  const getContinent = (country) =>
    /线上|online/i.test(country || "")
      ? "线上活动"
      : Object.entries(continentCountries).find(([, countries]) =>
          countries.includes(country),
        )?.[0] || "地区待确认";
  const multiDefinitions = [
    {
      key: "brand",
      label: "品牌",
      values: (events) => events.flatMap((event) => event.brands || []),
    },
    {
      key: "continent",
      label: "大洲",
      values: (events) => events.map((event) => getContinent(event.country)),
    },
    {
      key: "country",
      label: "国家／地区",
      values: (events) => events.map((event) => event.country),
    },
    {
      key: "city",
      label: "城市",
      values: (events) => events.map((event) => event.city),
    },
    {
      key: "month",
      label: "月份",
      values: (events) =>
        events.map((event) => event.start?.slice(0, 7).replace("-", ".")),
    },
    {
      key: "type",
      label: "活动类型",
      values: (events) => events.map((event) => event.type),
    },
    { key: "grade", label: "推荐等级", values: () => ["A", "B", "C"] },
  ];
  const uniqueSorted = (values) =>
    [...new Set(values.filter(Boolean))].sort((a, b) =>
      a.localeCompare(b, "zh-Hans-CN"),
    );
  const eventMatchesValue = (event, key, value) => {
    if (key === "brand") return event.brands?.includes(value);
    if (key === "continent") return getContinent(event.country) === value;
    if (key === "country") return event.country === value;
    if (key === "city") return event.city === value;
    if (key === "month")
      return event.start?.slice(0, 7).replace("-", ".") === value;
    if (key === "type") return event.type === value;
    if (key === "grade") {
      const brands = multiSelections.brand.size
        ? event.brands.filter((brand) => multiSelections.brand.has(brand))
        : event.brands;
      return brands.some((brand) => getEventGrade(event, brand) === value);
    }
    return true;
  };
  const applyMultiFilters = (events) =>
    events.filter((event) =>
      multiDefinitions.every(({ key }) => {
        const selected = multiSelections[key];
        return (
          !selected.size ||
          [...selected].some((value) => eventMatchesValue(event, key, value))
        );
      }),
    );
  const multiSignature = () =>
    multiDefinitions
      .map(({ key }) => `${key}:${[...multiSelections[key]].sort().join(",")}`)
      .join("|");
  const hasMultiFilters = () =>
    multiDefinitions.some(({ key }) => multiSelections[key].size);
  const getMultiMatchedBrand = (event) => {
    const brands = multiSelections.brand.size
      ? event.brands.filter((brand) => multiSelections.brand.has(brand))
      : event.brands;
    if (multiSelections.grade.size)
      return (
        brands.find((brand) =>
          multiSelections.grade.has(getEventGrade(event, brand)),
        ) || brands[0]
      );
    return brands[0] || event.brands[0];
  };
  const syncMultiFilterUi = () => {
    const root = document.querySelector(".multiFilters");
    multiDefinitions.forEach(({ key }) => {
      const details = root?.querySelector(`[data-filter-key="${key}"]`);
      const selected = multiSelections[key];
      details?.querySelectorAll('input[type="checkbox"]').forEach((input) => {
        const checked = selected.has(input.value);
        if (input.checked !== checked) input.checked = checked;
      });
      const status = details?.querySelector("summary b");
      const statusText = selected.size ? `已选 ${selected.size} 项` : "全部";
      if (status && status.textContent !== statusText)
        status.textContent = statusText;
    });
    const clear = root?.querySelector(".multiClear");
    const clearHidden = !hasMultiFilters();
    if (clear && clear.hidden !== clearHidden) clear.hidden = clearHidden;
  };
  const mountMultiFilters = () => {
    const toolbar = document.querySelector(".toolbar");
    const legacy = toolbar?.querySelector(".filters");
    if (!toolbar || !legacy) return;
    if (!legacy.classList.contains("legacyFilters"))
      legacy.classList.add("legacyFilters");
    if (toolbar.querySelector(".multiFilters")) {
      syncMultiFilterUi();
      return;
    }
    const events = getCurrentResultEvents();
    const root = document.createElement("section");
    root.className = "multiFilters";
    root.setAttribute("aria-label", "展会多选筛选器");
    multiDefinitions.forEach((definition) => {
      const details = document.createElement("details");
      details.className = "multiFilter";
      details.dataset.filterKey = definition.key;
      const summary = document.createElement("summary");
      summary.innerHTML = `<span>${definition.label}</span><b>全部</b>`;
      const options = document.createElement("div");
      options.className = "multiOptions";
      uniqueSorted(definition.values(events)).forEach((value) => {
        const count = events.filter((event) =>
          eventMatchesValue(event, definition.key, value),
        ).length;
        const label = document.createElement("label");
        label.className = "multiOption";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = value;
        input.checked = multiSelections[definition.key].has(value);
        input.addEventListener("change", () => {
          input.checked
            ? multiSelections[definition.key].add(value)
            : multiSelections[definition.key].delete(value);
          syncMultiFilterUi();
          renderMultiResults();
        });
        const text = document.createElement("span");
        text.textContent = value;
        const amount = document.createElement("small");
        amount.textContent = count;
        label.append(input, text, amount);
        options.append(label);
      });
      details.append(summary, options);
      details.addEventListener("toggle", () => {
        if (!details.open) return;
        root.querySelectorAll(".multiFilter[open]").forEach((other) => {
          if (other !== details) other.open = false;
        });
      });
      root.append(details);
    });
    const actions = document.createElement("div");
    actions.className = "multiFilterActions";
    const clear = document.createElement("button");
    clear.type = "button";
    clear.className = "multiClear";
    clear.textContent = "清除全部筛选";
    clear.addEventListener("click", () => {
      Object.values(multiSelections).forEach((set) => set.clear());
      syncMultiFilterUi();
      renderMultiResults();
    });
    actions.append(clear);
    root.append(actions);
    legacy.insertAdjacentElement("beforebegin", root);
    const rail = document.querySelector(".monthRail");
    if (rail && !rail.dataset.multiFilterBound) {
      rail.dataset.multiFilterBound = "true";
      rail.addEventListener(
        "click",
        (event) => {
          const stop = event.target.closest(".monthStop");
          if (!stop) return;
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          const month = stop.querySelector("span")?.textContent.trim();
          multiSelections.month.clear();
          if (month) multiSelections.month.add(month);
          document.querySelector(".monthEventPanel")?.remove();
          syncMultiFilterUi();
          renderMultiResults();
        },
        true,
      );
    }
    syncMultiFilterUi();
  };
  const renderMultiResults = () => {
    const toolbar = document.querySelector(".toolbar");
    const existing = document.getElementById("multi-filter-results");
    if (!toolbar) {
      existing?.remove();
      return;
    }
    const monthPanel = document.querySelector(".monthEventPanel");
    if (monthPanel && !monthPanel.hidden) monthPanel.hidden = true;
    const active = hasMultiFilters() || peopleSortMode !== "default";
    toolbar.classList.toggle("multiActive", active);
    const defaultResults = document.querySelector("#search-results");
    const pagination = document.querySelector(".pagination");
    if (defaultResults && defaultResults.hidden !== active)
      defaultResults.hidden = active;
    if (pagination && pagination.hidden !== active) pagination.hidden = active;
    if (!active) {
      existing?.remove();
      enhancePeopleCards();
      return;
    }
    const events = sortPeopleEvents(
      applyMultiFilters(getCurrentResultEvents()),
    );
    const pageCount = Math.max(1, Math.ceil(events.length / peoplePageSize));
    peoplePage = Math.min(peoplePage, pageCount);
    const pageEvents = events.slice(
      (peoplePage - 1) * peoplePageSize,
      peoplePage * peoplePageSize,
    );
    const signature =
      multiSignature() +
      "|" +
      peopleSortMode +
      "|" +
      peoplePage +
      "|" +
      events.map((event) => event.key).join("|");
    if (existing?.dataset.signature === signature) return;
    existing?.remove();
    const results = document.createElement("section");
    results.id = "multi-filter-results";
    results.className = "monthFilterResults";
    results.dataset.signature = signature;
    const criteria =
      multiDefinitions
        .filter(({ key }) => multiSelections[key].size)
        .map(
          ({ key, label }) =>
            `${label} ${[...multiSelections[key]].join("、")}`,
        )
        .join(" ＋ ") || "全部展会";
    results.innerHTML = `<div class="resultBar"><span>${criteria}：找到 <strong>${events.length}</strong> 场活动</span></div>${events.length ? '<div class="grid"></div>' : '<div class="empty">当前复合筛选条件下没有匹配的展会。</div>'}`;
    mountPeopleSort(results.querySelector(".resultBar"));
    const grid = results.querySelector(".grid");
    pageEvents.forEach((event) => {
      const matchedBrand = getMultiMatchedBrand(event);
      const grade = getEventGrade(event, matchedBrand);
      const card = document.createElement("article");
      card.className = "card monthFilterCard";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `查看${event.name}详情`);
      card.innerHTML =
        '<div class="cardTop"><div><div class="meta compact"><span class="pill eventType"></span><span class="pill matchedBrand"></span></div><h2></h2></div><span class="grade"></span></div><div class="eventFacts"><span></span><span></span></div><div class="meta"><span class="pill light allBrands"></span></div><p class="summary"></p><div class="cardActions"><span class="linkBtn">查看详情 →</span></div>';
      card.querySelector(".eventType").textContent = event.type || "活动";
      card.querySelector(".matchedBrand").textContent =
        matchedBrand || "品牌待确认";
      card.querySelector("h2").textContent = event.name;
      card.querySelector(".grade").textContent = grade;
      card
        .querySelector(".grade")
        .classList.add("grade-" + grade.toLowerCase());
      card.querySelector(".eventFacts span:first-child").textContent =
        event.end && event.end !== event.start
          ? `${event.start} 至 ${event.end}`
          : event.start;
      card.querySelector(".eventFacts span:nth-child(2)").textContent = [
        event.city,
        event.country,
      ]
        .filter(Boolean)
        .join("，");
      card.querySelector(".allBrands").textContent = event.brands.join("、");
      card.querySelector(".summary").textContent =
        event.description || "点击查看完整详情";
      addPeoplePreview(card, event);
      card.dataset.peopleEnhanced = "true";
      addFilterFavoriteButton(card, event);
      const open = () => openEventDetail(event);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (keyEvent) => {
        if (keyEvent.key === "Enter" || keyEvent.key === " ") {
          keyEvent.preventDefault();
          open();
        }
      });
      grid?.append(card);
    });
    if (events.length > peoplePageSize) {
      const pager = document.createElement("nav");
      pager.className = "peoplePager";
      pager.setAttribute("aria-label", "人数排序结果分页");
      pager.innerHTML = `<button type="button" class="peoplePrev">上一页</button><span>第 ${peoplePage} / ${pageCount} 页</span><button type="button" class="peopleNext">下一页</button>`;
      const previous = pager.querySelector(".peoplePrev");
      const next = pager.querySelector(".peopleNext");
      previous.disabled = peoplePage === 1;
      next.disabled = peoplePage === pageCount;
      previous.addEventListener("click", () => {
        peoplePage -= 1;
        renderMultiResults();
        window.scrollTo({ top: toolbar.offsetTop, behavior: "smooth" });
      });
      next.addEventListener("click", () => {
        peoplePage += 1;
        renderMultiResults();
        window.scrollTo({ top: toolbar.offsetTop, behavior: "smooth" });
      });
      results.append(pager);
    }
    toolbar.insertAdjacentElement("afterend", results);
  };
  const scaleHighlight = () => {
    const body = document.querySelector(".detailBody");
    const recommendation = body?.querySelector(".textSection.featured");
    const factGrid = body?.querySelector(".factGrid");
    if (
      !body ||
      !recommendation ||
      !factGrid ||
      body.querySelector(".scaleHighlight")
    )
      return;
    const scaleInfo = [...factGrid.querySelectorAll(".info")].find(
      (node) => node.querySelector("b")?.textContent.trim() === "规模参考",
    );
    if (!scaleInfo) return;
    const name = document.querySelector(".detailTitle h1")?.textContent.trim();
    const event = getCurrentResultEvents().find(
      (candidate) => candidate.name === name,
    );
    if (!event) return;
    const exhibitor = getPeopleMetric(event, "exhibitor").text;
    const visitor = getPeopleMetric(event, "visitor").text;
    const entity = getPeopleMetric(event, "entity").text;
    const section = document.createElement("section");
    section.className = "scaleHighlight";
    section.innerHTML =
      '<h3>规模参考</h3><div class="scaleMetrics"><div><b>参展人数</b><span>' +
      exhibitor +
      "</span></div><div><b>观展人数</b><span>" +
      visitor +
      "</span></div><div><b>参会企业/参展商数量</b><span>" +
      entity +
      "</span></div></div>";
    recommendation.insertAdjacentElement("afterend", section);
    scaleInfo.remove();
  };
  const collapseVerificationDetail = () => {
    const card = document.querySelector(".detail > .verificationCard");
    if (!card) return;
    const disclosure = document.createElement("details");
    disclosure.className = "verificationDisclosure";
    const summary = document.createElement("summary");
    const label = document.createElement("span");
    label.textContent = "核验详情";
    const status = document.createElement("b");
    status.textContent =
      card.querySelector(".verificationBadge")?.textContent.trim() ||
      "查看核验信息";
    summary.append(label, status);
    card.insertAdjacentElement("beforebegin", disclosure);
    disclosure.append(summary, card);
  };
  const observer = new MutationObserver(() => {
    mountMultiFilters();
    renderMultiResults();
    enhancePeopleCards();
    scaleHighlight();
    collapseVerificationDetail();
  });
  observer.observe(document.getElementById("root"), {
    childList: true,
    subtree: true,
  });
  window.setTimeout(() => {
    mountMultiFilters();
    renderMultiResults();
    enhancePeopleCards();
    scaleHighlight();
    collapseVerificationDetail();
  }, 0);
})();
