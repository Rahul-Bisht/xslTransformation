 // Using Saxon.run method with the Command object to start an HTML page transform: 
 var onSaxonLoad = function() {
     Saxon.run({
         stylesheet: "rich-text/xsl/test.xsl",
         source: "/rich-text/content/test.xml",
         initialMode: "",
         parameters: {
             "mass-kg": 225,
             point: [128, 79],
             label: "Definitions"
         },

         success: success,
         errorHandler: (...a) => {
             console.log(...a);
         }
     });
 }

 var success = (...a) => {
     debugger;
     console.log(...a);
 };

 runout = () => {


     var xml = Saxon.requestXML('/rich-text/content/htest.html') //(document.querySelector('.root').innerHTML);
     var xsl =
         Saxon.requestXML("/rich-text/xsl/DeloitteOut.xsl");
     var proc = Saxon.newXSLT20Processor(xsl);
     proc.setParameter(null, "mass-kg", 225);
     proc.setParameter(null, "point", [128,
         79
     ]);
     proc.setParameter(null, "label", "Definitions");
     proc.setSuccess();
     //proc.setErrorHandler(runTest);
     var doc = proc.updateHTMLDocument(xml);
 };
 // equivalent using the procedural JavaScript API: var onSaxonLoad =
 //  function() {
 //      var xml = Saxon.requestXML(geo - files.xml);
 //      var xsl =
 //          Saxon.requestXML("display-geo.xsl");
 //      var proc = new XSLT20Processor(xsl);
 //      proc.setParameter(null, "mass-kg", 225);
 //      proc.setParameter(null, "point", [128,
 //          79
 //      ]);
 //      proc.setParameter(null, "label", "Definitions");
 //      proc.setErrorHandler(saxonHandler);
 //      proc.updateHTMLDocument(xml, null);
 //  }