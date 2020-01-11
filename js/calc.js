$(document).ready(function () {

    $("#calc #calculate").click(function() {
        let nPrincipal;
        let nMonths;
        let nTEA;
        let nProfit;

        nPrincipal=$('#nPrincipal').val();
        nMonths=$('#nMonths').val();
    
        function getTEA(nPrincipal,nMonths) {
            let nBase;
            let nEAR;
            let nEIR;
    
            if(nPrincipal<10000) {
                nBase=0.029;
            } else if(nPrincipal>=10000&&nPrincipal<20000) {
                nBase=0.039;
            } else if(nPrincipal>=20000) {
                nBase=0.049;
            }
    
            nEAR=nBase+(nMonths-1)*0.001;
    
            nEIR=nEAR/12*nMonths;
    
            return nPrincipal * (1 + nEIR);
        }
    
        nTEA=getTEA(nPrincipal,nMonths);
        nProfit=nTEA-nPrincipal;

        $("#calc #nTEA").val(nTEA);
        $("#calc #nProfit").val(nProfit);
    });

    $("#calc #calculate").trigger('click');
});