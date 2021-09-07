import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  companies: { code: string; name: string; }[];
  item!: string;

  constructor() {
    this.companies = [     
      {code:"0",name: ""},
      
      {code:"229",name: "CONDITIONS SPÉCIFIQUES DES CIES"},
      
      {code:"1",name: "ABELA"},
      
      {code:"2",name: "ACM (Assurances Credit Mutuel) / CIC"},
      
      {code:"3",name: "ACORIS"},
      
      {code:"4",name: "ADEP"},
      
      {code:"5",name: "ADREA"},
      
      {code:"220",name: "AFI SANTE"},
      
      {code:"6",name: "AG2R"},
      
      {code:"7",name: "AGF / ALLIANZ"},
      
      {code:"209",name: "AGIPI"},
      
      {code:"210",name: "AGPM SANTÉ"},
      
      {code:"8",name: "AGRICA"},
      
      {code:"211",name: "ALLIANZ"},
      
      {code:"9",name: "ALLSECUR (Filiale ALLIANZ)"},
      
      {code:"10",name: "ALPTIS"},
      
      {code:"11",name: "ALPTIS ( MILTIS )"},
      
      {code:"12",name: "AMAGUIZ"},
      
      {code:"13",name: "AMIS"},
      
      {code:"14",name: "AMPLI MUTUELLE"},
      
      {code:"15",name: "APGIS"},
      
      {code:"16",name: "APICIL"},
      
      {code:"17",name: "APICIL"},
      
      {code:"222",name: "APIVIA"},
      
      {code:"18",name: "APIVIA (COURTIER)"},
      
      {code:"19",name: "APIVIA (GROUPE MACIF)"},
      
      {code:"20",name: "APREVA"},
      
      {code:"21",name: "APRIL"},
      
      {code:"213",name: "APRS / GIEPS"},
      
      {code:"212",name: "APS PRÉVOYANCE"},
      
      {code:"22",name: "AREAS"},
      
      {code:"23",name: "ARIA"},
      
      {code:"24",name: "ARPEGE PREVOYANCE"},
      
      {code:"62",name: "ASAF"},
      
      {code:"25",name: "ASSU 2000"},
      
      {code:"214",name: "ASSURASUD"},
      
      {code:"26",name: "ASSUREMA / ASSOR"},
      
      {code:"27",name: "ASSUREO"},
      
      {code:"215",name: "AUBEANE MUTUELLE"},
      
      {code:"28",name: "AUDIENS"},
      
      {code:"29",name: "AVENIR MUTUELLE"},
      
      {code:"30",name: "AVIVA"},
      
      {code:"31",name: "AXA"},
      
      {code:"216",name: "B2V"},
      
      {code:"32",name: "BAHEMA"},
      
      {code:"33",name: "BCAC"},
      
      {code:"217",name: "BNP"},
      
      {code:"218",name: "BNP CARDIF"},
      
      {code:"34",name: "BOISSIERE MUTUELLE"},
      
      {code:"35",name: "CAISSE EPARGNE (BPCE)"},
      
      {code:"36",name: "CARCEPT PREVOYANCE"},
      
      {code:"37",name: "CARDIF (BNP PARIBAS)"},
      
      {code:"38",name: "CARMA (CarrefourAssurances)"},
      
      {code:"227",name: "CARREFOUR"},
      
      {code:"39",name: "CCMO"},
      
      {code:"40",name: "CEGEMA"},
      
      {code:"41",name: "CIPRES"},
      
      {code:"42",name: "CMIP"},
      
      {code:"43",name: "CNG"},
      
      {code:"44",name: "CNM"},
      
      {code:"45",name: "COVEA RISK"},
      
      {code:"46",name: "CREDIT AGRICOLE (Pacifica)"},
      
      {code:"47",name: "CREDIT MUTUEL - CIC"},
      
      {code:"48",name: "DINALIS"},
      
      {code:"49",name: "DIRECT ASSURANCES (ACBF)"},
      
      {code:"50",name: "ECA"},
      
      {code:"51",name: "EMOA ( MUTUELLE DU VAR )"},
      
      {code:"52",name: "EOVI"},
      
      {code:"53",name: "EPSIL"},
      
      {code:"54",name: "EUROMUTUELLE (Euroassurance)"},
      
      {code:"55",name: "EXISTENCE"},
      
      {code:"56",name: "FFA"},
      
      {code:"57",name: "FMA"},
      
      {code:"58",name: "France MUTUELLE"},
      
      {code:"59",name: "GAN "},
      
      {code:"60",name: "GENERALI"},
      
      {code:"61",name: "GENERATION "},
      
      {code:"63",name: "GMC / HENNER"},
      
      {code:"64",name: "GMF"},
      
      {code:"65",name: "GPM"},
      
      {code:"66",name: "GRAS SAVOYE"},
      
      {code:"67",name: "GRM"},
      
      {code:"68",name: "GROUPAMA"},
      
      {code:"69",name: "GROUPE MANSUY"},
      
      {code:"219",name: "GSMC"},
      
      {code:"70",name: "HARMONIE MUTUELLE"},
      
      {code:"71",name: "HUMANIS"},
      
      {code:"225",name: "ID MACIF"},
      
      {code:"72",name: "IDENTITE MUTUELLE / MAELIA /SICOM"},
      
      {code:"73",name: "IMPERIALE"},
      
      {code:"74",name: "INTEGRANCE"},
      
      {code:"75",name: "INTERIALE"},
      
      {code:"76",name: "IPK PREVOYANCE"},
      
      {code:"77",name: "IRCM"},
      
      {code:"78",name: "JUST'ENFAMILLE"},
      
      {code:"79",name: "KLESIA (Anc. Mornay) UMC"},
      
      {code:"80",name: "LA BANQUE POSTALE ASSURANCE SANTE"},
      
      {code:"81",name: "LA MEDICALE "},
      
      {code:"82",name: "LANDES MUTUALITE"},
      
      {code:"83",name: "LCL (Credit Lyonnais)"},
      
      {code:"84",name: "M COMME MUTUELLE"},
      
      {code:"85",name: "MA SANTE FACILE"},
      
      {code:"86",name: "MAAF"},
      
      {code:"87",name: "MACIF"},
      
      {code:"88",name: "MACIFILIA"},
      
      {code:"89",name: "MACSF"},
      
      {code:"90",name: "MAIF"},
      
      {code:"91",name: "MALAKOFF MEDERIC"},
      
      {code:"221",name: "MALAKOFF MEDERIC - AMIS"},
      
      {code:"92",name: "MAPA"},
      
      {code:"93",name: "MATMUT"},
      
      {code:"94",name: "MBA"},
      
      {code:"95",name: "MBA MUTUELLE"},
      
      {code:"96",name: "MCA (Mut complémentaire d'Alsace)"},
      
      {code:"97",name: "MCD EOVI"},
      
      {code:"98",name: "MCDEF"},
      
      {code:"99",name: "MCRN"},
      
      {code:"100",name: "MENAGES PREVOYANTS"},
      
      {code:"101",name: "MERCER"},
      
      {code:"102",name: "MG POLICE"},
      
      {code:"226",name: "MGC"},
      
      {code:"103",name: "MGEN (RETRAITE)"},
      
      {code:"104",name: "MGEN (SALARIE)"},
      
      {code:"105",name: "MGEN / REFERENCE / INTEGRALE"},
      
      {code:"106",name: "MGEN FILIA EFFICIENCE"},
      
      {code:"107",name: "MGS"},
      
      {code:"108",name: "MICOM (DIRECT ASSURANCES)"},
      
      {code:"109",name: "MIEL ASSURANCES"},
      
      {code:"110",name: "MIEUX ETRE"},
      
      {code:"111",name: "MIP"},
      
      {code:"112",name: "MIPCF"},
      
      {code:"113",name: "MMA"},
      
      {code:"114",name: "MMC"},
      
      {code:"115",name: "MMJ"},
      
      {code:"116",name: "MNEC"},
      
      {code:"117",name: "MNFCT"},
      
      {code:"118",name: "MNH"},
      
      {code:"119",name: "MNM"},
      
      {code:"120",name: "MNT"},
      
      {code:"121",name: "MPS"},
      
      {code:"122",name: "MSA"},
      
      {code:"123",name: "MSAE"},
      
      {code:"124",name: "MTRL"},
      
      {code:"125",name: "MUTA SANTE "},
      
      {code:"126",name: "MUTIEG"},
      
      {code:"127",name: "MUTUALIA"},
      
      {code:"128",name: "MUTUELLE 403"},
      
      {code:"129",name: "MUTUELLE BLEUE"},
      
      {code:"130",name: "MUTUELLE COMPL. D ALSACE"},
      
      {code:"131",name: "MUTUELLE CYBELE SOLIDARITE"},
      
      {code:"132",name: "MUTUELLE DE France"},
      
      {code:"133",name: "MUTUELLE DE L'AIN"},
      
      {code:"134",name: "MUTUELLE DE L'EST"},
      
      {code:"135",name: "MUTUELLE DE POITIERS"},
      
      {code:"136",name: "MUTUELLE DE REMPARTS"},
      
      {code:"137",name: "MUTUELLE DES CHEMINOTS (MGC)"},
      
      {code:"138",name: "MUTUELLE DU PAYS DE VILAINE"},
      
      {code:"139",name: "MUTUELLE DU SOLEIL"},
      
      {code:"140",name: "MUTUELLE DU SUD OUEST"},
      
      {code:"141",name: "MUTUELLE DU TRESOR"},
      
      {code:"142",name: "MUTUELLE DU VAR "},
      
      {code:"143",name: "MUTUELLE FAMILIALE"},
      
      {code:"144",name: "MUTUELLE FORCE SUD"},
      
      {code:"145",name: "MUTUELLE GENERALE"},
      
      {code:"146",name: "MUTUELLE PAYS HAUT"},
      
      {code:"147",name: "MUTUELLE PRESENCE"},
      
      {code:"148",name: "MUTUELLE SANTE PLUS"},
      
      {code:"149",name: "MUTUELLE SANTEO"},
      
      {code:"150",name: "MUTUELLE ST CHRISTOPHE"},
      
      {code:"151",name: "MUTUELLE ST GERMAIN"},
      
      {code:"152",name: "MUTUELLE VERTE"},
      
      {code:"153",name: "MVS"},
      
      {code:"154",name: "MYRIADE"},
      
      {code:"155",name: "NEOLIANE / MUTUA GESTION"},
      
      {code:"156",name: "NOVALIA"},
      
      {code:"157",name: "NOVALIS"},
      
      {code:"158",name: "OCIANE"},
      
      {code:"159",name: "ORYS ( FILIALE NEOLIANE )"},
      
      {code:"160",name: "OWLIANCE"},
      
      {code:"161",name: "PAVILLON PREVOYANCE "},
      
      {code:"162",name: "PEREIRE"},
      
      {code:"163",name: "POP SANTE"},
      
      {code:"164",name: "PRADO"},
      
      {code:"165",name: "PREACONIS"},
      
      {code:"166",name: "PREMALLIANCE"},
      
      {code:"167",name: "PREVADIES"},
      
      {code:"168",name: "PREVI France"},
      
      {code:"169",name: "PREVIADES"},
      
      {code:"170",name: "PREVOIR"},
      
      {code:"171",name: "PREVOIR SANTE"},
      
      {code:"172",name: "PRO BTP"},
      
      {code:"173",name: "QUATREM"},
      
      {code:"174",name: "RADIANCE"},
      
      {code:"175",name: "RENAULT"},
      
      {code:"176",name: "REPAM"},
      
      {code:"177",name: "REUNICA"},
      
      {code:"178",name: "REVOLUO (1ère année date anniv)"},
      
      {code:"179",name: "ROEDERER"},
      
      {code:"180",name: "ROUSSILLONNAISE"},
      
      {code:"181",name: "SANTEVIE"},
      
      {code:"182",name: "SERVIR"},
      
      {code:"183",name: "SMAM / APIVIA"},
      
      {code:"184",name: "SMATIS"},
      
      {code:"185",name: "SMH"},
      
      {code:"186",name: "SMI"},
      
      {code:"187",name: "SMIP"},
      
      {code:"188",name: "SMISO"},
      
      {code:"189",name: "SOCIETE GENERALE"},
      
      {code:"190",name: "SOLIMUT"},
      
      {code:"191",name: "SOLLY AZAR"},
      
      {code:"192",name: "SO'LYON"},
      
      {code:"193",name: "SPHERIA"},
      
      {code:"194",name: "SUD OUEST MUTUALITE"},
      
      {code:"195",name: "SWISSLIFE"},
      
      {code:"196",name: "TERCIANE"},
      
      {code:"197",name: "THELEM"},
      
      {code:"198",name: "TOURRAINE MUTUALISTE"},
      
      {code:"199",name: "TRANQUILITE SANTE"},
      
      {code:"200",name: "UCR"},
      
      {code:"201",name: "UMC"},
      
      {code:"202",name: "UNEO"},
      
      {code:"203",name: "UNI SANTE"},
      
      {code:"204",name: "UNILIA"},
      
      {code:"224",name: "VAUBAN HUMANIS"},
      
      {code:"205",name: "VERSPIEREN"},
      
      {code:"206",name: "VIA SANTE (AG2R)"},
      
      {code:"223",name: "VISUAL ASSURANCES"},
      
      {code:"207",name: "VIVINTER"}

  ]
  }

  ngOnInit(): void {
  }

}
