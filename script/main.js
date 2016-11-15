/**
 * Created by wverrier on 2016-11-06.
 */
"use strict";

$(function(){
    // for(var index = 0; index < P86_TP_forfaits.length, index++) {};
    var ul_forfaits_nom = $('#forfaits_nom'); // Le ul des forfaits
    jQuery.each(P86_TP_forfaits, function(index, forfait){
        console.log(index, forfait);
        var li_forfait_jQ =
            $('<li>')
                .appendTo(ul_forfaits_nom)
                .text(forfait.nom);
    });
});


$(function(){
    // for(var index = 0; index < P86_TP_forfaits.length, index++) {};
    var ul_forfaits_prix = $('#forfaits_prix'); // Le ul des forfaits
    jQuery.each(P86_TP_forfaits, function(index, forfait){
        console.log(index, forfait);
        var li_forfait_jQ =
            $('<li>')
                .appendTo(ul_forfaits_prix)
                .text(forfait.prix_basse_saison);
    });
});

$(function(){
    // for(var index = 0; index < P86_TP_forfaits.length, index++) {};
    var ul_forfaits_date = $('#forfaits_date'); // Le ul des forfaits
    jQuery.each(P86_TP_forfaits, function(index, forfait){
        console.log(index, forfait);
        var li_forfait_jQ =
            $('<li>')
                .appendTo(ul_forfaits_date)
                .text(forfait.debut_saison);
    });
});

$(function(){
    // for(var index = 0; index < P86_TP_forfaits.length, index++) {};
    var ul_forfaits_description = $('#forfaits_description'); // Le ul des forfaits
    jQuery.each(P86_TP_forfaits, function(index, forfait){
        console.log(index, forfait);
        var li_forfait_jQ =
            $('<li>')
                .appendTo(ul_forfaits_description)
                .text(forfait.description);
    });
});
