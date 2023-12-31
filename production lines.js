Highcharts.chart('container', {
    chart: {
        zoomType: 'xy',
         margin: [160, 100, 100, 150]
     
  
    },
 title: {
        text: 'Production of key forest products ',
        align: 'left'
    },
       subtitle: {
        text: 'Data Source: <a href="https://www.fao.org/faostat/en/#data/FO">FAOSTAT Forestry</a>.',
        align: 'left'
    },
    
    
    xAxis: [{ title: {
            enabled: true,
            text: 'Year'
        },
       
        categories: ['1961', '1962', '1963', '1964', '1965', '1966',
            '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003',  '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',  '2017', '2018', '2019', '2020', '2021'],
            crosshair: true
         
             
    }],

        rangeSelector: {
            floating: true,
            y: -65,
            verticalAlign: 'bottom'
        },

        navigator: {
            margin: 60
        },
    yAxis: [{ // Primary yAxis
   
      tickInterval: 500000000,
    max: 2500000000,

        labels: {
            format: '{value}',
            formatter: function () {
            return Highcharts.numberFormat(this.value / 1000000, 0);
        },

            style: {
                color: Highcharts.getOptions().colors[10]
            }
        },
        title: {
          align: 'high',
            offset: 0,
                     text: 'cubic metres(millions)',
            rotation: 0,
            y: -10,
            
            style: {
                color: Highcharts.getOptions().colors[10]
            }
        }
        
   

    }, { // Secondary yAxis
        title: {
          align: 'high',
            offset: 0,
                     text: 'tonnes(millions)',
            rotation: 0,
            y: -10,
            
            style: {
                color: Highcharts.getOptions().colors[10]
            }
        },
        labels: {
            format: '{value} ',
               formatter: function () {
            return Highcharts.numberFormat(this.value / 1000000, 0);
        },
            style: {
                color: Highcharts.getOptions().colors[10]
            }
        },
        opposite: true
    }],
    tooltip: {
       shared: false
    },
    legend: {
        align: 'left',
        x: 0,
        verticalAlign: 'top',
        y: 0,
        floating: false,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(256,255,255,0.25)'
    },
    series: [{
        name: 'Paper and paperboard',
        type: 'line',
        marker: {
            symbol: 'circle'
        },
      labels:{
            	formatter:function(){
                return (this.value + 1);
           		 },
			align: 'left',
            x: 0,
            y: -2
      		  },
        	title: {
            text: 'Paper and paperboard'
         	},
			
    
        yAxis: 1,
        data: [77075896,80388600,85274024,91045000,96525604,103843296,105022896,113115596,122071408,125583135,127507010,136674800,147362100,149506908,127027725,146298208,151146000,158933700,167801808,169316596,169118143,166246512,176427087,189058265,192052055,202361443,213700010,226589428,232199918,239353243,243079992,246614955,252361075,268784434,282291193,284372382,301359552,301935942,315936525,324585533,318933710,329812012,338876765,355776669,365187599,382051380,392110718,389718257,370601060,392442311,400120126,399138519,396872104,404092316,406930884,409283537,415196477,408439167,404191451,400377707,417301010],
        tooltip: {
            valueSuffix: ' tonnes'
        }

    },
    {
        name: 'Wood Pulp',
        type: 'spline',
        yAxis: 1,
        marker: {
            symbol: 'circle'
        },
        data: [61548400,63696800,68525400,73567000,77557400,82857600,84815800,91640700,97909800,101649500,101373200,107172600,113399600,116651400,101784073,111034200,112525800,118226300,123148100,125679208,125363516,119535708,127076708,135077808,134318500,140146008,146496116,151444908,156083100,154798200,155178233,152845822,151208675,161910768,161571317,156441635,162503657,159756665,163433779,171114970,163993414,167163548,169908698,174648265,173849097,175614862,180969754,177284468,160349084,172441720,174756182,172177669,173230663,176930031,177654267,182301128,184319925,192514967,190361233,187091527,189321938],
        tooltip: {
            valueSuffix: ' tonnes'
        }

    },
       { name: 'Wood Fuel',
        type: 'spline',
       
        marker: {
            symbol: 'circle'
        },
        data: [1498738466,1491096482,1501308865,1513488178,1514171639,1526347281,1528549182,1530931056,1528621592,1542387501,1550398053,1564222347,1565001717,1584875554,1591627605,1614684617,1622780443,1632902929,1662009854,1682302640,1704050800,1744685315,1746986309,1767329663,1771469304,1780537886,1775438121,1792454281,1801563455,1833083000,1869868731,1841461249,1809956198,1802119716,1809403744,1796500652,1816477564,1810515711,1815006045,1795244627,1802548663,1820643807,1831834645,1836154971,1825331097,1834805586,1841194068,1848396612,1840208705,1864002026,1870970098,1887396983,1897823383,1900374577,1901265439,1927783200,1931111419,1945449851,1942007516,1928001955,1948184684],
        tooltip: {
            valueSuffix: 'm3'
        }
       },
      { name: 'Sawnwood',
        type: 'spline',
        marker: {
            symbol: 'circle'
        },
        data: [323575399,326104720,335095362,354361463,358376265,359031622,363784349,374854643,384830378,389090528,401472202,404787077,413430143,398128315,381849452,406905862,417002963,426150225,428491374,420867512,402783969,394435693,417295813,426163218,432774687,447353843,465614781,470499077,469481122,463008817,418240068,403259529,394458052,395896837,390752421,386742898,393750973,378443601,388836580,385242891,379433546,392430390,399690000,425294462,437813366,446142633,434362500,386902119,344337595,375631667,388699552,404811164,421364114,435366614,448062243,481779343,501648693,508031629,504631796,485385603,494467630],
        tooltip: {
            valueSuffix: 'm3'
        }
       },
                {   name: 'Recovered Paper',
        type: 'spline',
        yAxis: 1,
        marker: {
            symbol: 'circle'
        },
        data: [15383200	,15680000,	15849000,	17367000,	17620000,	19406000,	19739000,	21129000,	22428000,	30758000,	31320000,	34278000,	38660000,	39313000,	35074000,	40479000,	43082000,	45126000,	47152000,	50540000,	51417000,	51831000,	55298900,	59977100,	61058000,	65607008,	69965000,	76148008,	82018808,	84253078,	89436908,	92935648,	97073200,	107703100,	114411600,	117212600,	120804400,	123746458,	131454968,	143417974,	143735183,	151299569,	157214169,	165036722	,173969399,	188018843,	197373687,	203372962,	204532820,	212733257,	216507549,	218945259	,220125847,	227779471,	228604481,	230790456,	234444359,	232165326,	231111111,	228570046,	244138860
 ],
        tooltip: {
            valueSuffix: ' tonnes'
        }

    },
  
                {   name: 'Wood pellets and other agglomerates',
        type: 'spline',
        yAxis: 1,
        marker: {
            symbol: 'circle'
        },
        data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,23324962,26742251,30857342,32819557,35083044,39153815,43895038,48824180,49490115,51234737 ],
        tooltip: {
            valueSuffix: 'tonnes'
        }

    },
    {
        name: 'Wood based Panels',
        type: 'spline',
        marker: {
            symbol: 'circle'
        },
        data: [25134700,	28135300,	32545800,	35961200,	39913800,	48960182,	51740568,	58337450,	62547517,	66576465,	75019559,	84220993,	91884567,	84554139,	81011448,	91795559,	97424509,	100231201,	101406801,	96891792,	96184739,	91249724,	101289698,	104905308,	108226150,	115088923,	121230988,	127316558,	129233450,	123777435,	120470727,	124056908,	127660150,	130520208,	141210382,	141573210,	152391315,	151452236,	164909976,	178163524,	178067567,	195022241,	218786933,	239260925,	252004373,	266675003,	281682240,	268499243,	263797680,	284438936,	302633268,	315164744,	337604360,	342416352,	344616229,	372910319,	377980417,	380652796,	386392608,	380582013,	396336413
],
        tooltip: {
            valueSuffix: 'm3'
        }
    }]
});


