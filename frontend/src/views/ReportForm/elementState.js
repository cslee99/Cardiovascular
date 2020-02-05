export const elementState = {
    //Admission data

    //Admission data - Past history and risk factor _ 19개
    "121": false, // HET
    "122": "", // DM
    "123": "", // Smoking
    "124": false, // dyslipidemia
    "125": false, // F/H of premature CAD
    "126": false, // old MI
    "127": false, // PrePCI
    "128": false, // PreCABG
    "129": false, // pre valve surgery
    "1210": false, // old CVA
    "1211": false, // pre PAD
    "1212": false, //CKD
    "1213": false, //dialysis for ESRD
    "1214": false, //Asthma/COPD
    "1215": false, //Liver cirrhosis
    "1216": false, //chronic AF
    "1217": false, //pre CHF
    "1218": false, //pre pacemaker
    "1219": false, //pre ICD/CRT


    //Admission data - Reason for PCI _ 9개
    "131": false, //Diagnosis
    //STEMI
    "132": "", //STEMI_Killip
    "133": "", //STEMI_Onset time
    "134": "", //STEMI_Door time
    "135": "", //STEMI_Balloon time
    "136": "", //NSTEMI_Killip
    "137": "", //NSTEMI_Onset time
    "138": "", //NSTEMI_Door time
    "139": "", //NSTEMI_Balloon time


    //Admission data - Pre-Admission medication _ 8개
    "141": false, //ASA
    "142": false, //P2Y12I
    "143": "", //P2Y12I_medicine
    "144": false, //BB
    "145": false, //ACEI
    "146": false, //ARB
    "147": false, //CCB
    "148": false, //stain



    //Event

    //Event - Inhospital event _ 27개
    "211": "Empty", //death
    "212": "", //date
    "213": false, //reason
    "214": "Empty", //MI
    "215": "", //date
    "216": false, //Target vessel
    "217": "Empty", //Ischemin_stroke
    "218": "", //Ischemic_stroke_date
    "219": "Empty", //TLR
    "2110": "", //TLR_date
    "2111": false, //TLR_Tx
    "2112": "Empty", //TVR
    "2113": "", //TVR_date
    "2114": false, //TVR_Tx
    "2115": "Empty", //OVR
    "2116": "", //OVR_date
    "2117": false, //OVR_Tx
    "2118": "Empty", //Stent_thrombosis
    "2119": "", //Stent_thrombosis_date
    "2120": false, //Stent_thrombosis_type
    "2121": "Empty", //Bleeding
    "2122": "", //date
    "2123": false, //type
    "2124": false, //site
    "2125": "", //other
    "2126": false, //transfusion
    "2127": "", //unit


    //Event - Follow up_30day _ 48개
    "221": "Empty", //death
    "222": "", //death_date
    "223": false, //death_reason
    "224": "Empty", //MI
    "225": "", //MI_date
    "226": false, //MI_Target_vessel
    "227": "Empty", //Ischemic_stroke
    "228": "", //Ischemic_stroke_date 
    "229": "Empty", //TLR
    "2210": "", //TLR_date
    "2211": false, //TLR_Tx
    "2212": "Empty", //TVR
    "2213": "", //TVR_date
    "2214": false, //TVR_Tx
    "2215": "Empty", //OVR
    "2216": "", //OVR_date
    "2217": false, //OVR_Tx
    "2218": "Empty", //Stent_thrombosis
    "2219": "", //Stent_thrombosis_date
    "2220": false, //Stent_thrombosis_type
    "2221": "Empty", //readmission_HF
    "2222": "", //readmission_HF_date
    "2223": "Empty", //readmission_PAD
    "2224": "", //readmission_PAD_date
    "2225": "Empty", //readmission_PTE
    "2226": "", //readmission_PTE_date
    "2227": "Empty", //Bleeding
    "2228": "", //Bleeding_date
    "2229": false, //Bleeding_type
    "2230": false, //Bleeding_site
    "2231": "", //Bleeding_site_other
    "2232": false, //Bleeding_transfusion
    "2233": "", //Bleeding_transfusion_unit

    "2234": "Empty", //Cancer
    "2235": "", //Cancer_date
    "2236": "", //Cancer_location
    "2237": "Empty", //f/u_CAG
    "2238": "", //f/u_CAG_date
    "2239": "Empty", //f/u_loss
    "2240": "", //f/u_loss_date
    "2241": "Empty", //stain_S/E
    "2242": false, //stain_S/E_myalgia
    "2243": false, //stain_S/E_fatigue
    "2244": false, //stain_S/E_dizziness
    "2245": false, //stain_S/E_headache
    "2246": false, //stain_S/E_GI_problem
    "2247": false, //stain_S/E_itching
    "2248": false, //stain_S/E_drug_stop_or_change_d/t_S/E


    //Event - Follow up_1year _ 48개
    "231": "Empty", //death
    "232": "", //death_date
    "233": false, //death_reason
    "234": "Empty", //MI
    "235": "", //MI_date
    "236": false, //MI_Target_vessel
    "237": "Empty", //Ischemic_stroke
    "238": "", //Ischemic_stroke_date 
    "239": "Empty", //TLR
    "2310": "", //TLR_date
    "2311": false, //TLR_Tx
    "2312": "Empty", //TVR
    "2313": "", //TVR_date
    "2314": false, //TVR_Tx
    "2315": "Empty", //OVR
    "2316": "", //OVR_date
    "2317": false, //OVR_Tx
    "2318": "Empty", //Stent_thrombosis
    "2319": "", //Stent_thrombosis_date
    "2320": false, //Stent_thrombosis_type
    "2321": "Empty", //readmission_HF
    "2322": "", //readmission_HF_date
    "2323": "Empty", //readmission_PAD
    "2324": "", //readmission_PAD_date
    "2325": "Empty", //readmission_PTE
    "2326": "", //readmission_PTE_date
    "2327": "Empty", //Bleeding
    "2328": "", //Bleeding_date
    "2329": false, //Bleeding_type
    "2330": false, //Bleeding_site
    "2331": "", //Bleeding_site_other
    "2332": false, //Bleeding_transfusion
    "2333": "", //Bleeding_transfusion_unit
    "2334": "Empty", //Cancer
    "2335": "", //Cancer_date
    "2336": "", //Cancer_location
    "2337": "Empty", //f/u_CAG
    "2338": "", //f/u_CAG_date
    "2339": "Empty", //f/u_loss
    "2340": "", //f/u_loss_date
    "2341": false, //stain_S/E
    "2342": false, //stain_S/E_myalgia
    "2343": false, //stain_S/E_fatigue
    "2344": false, //stain_S/E_dizziness
    "2345": false, //stain_S/E_headache
    "2346": false, //stain_S/E_GI_problem
    "2347": false, //stain_S/E_itching
    "2348": false, //stain_S/E_drug_stop_or_change_d/t_S/E


    //Event - Follow up_3year _ 40개
    "241": "Empty", //death
    "242": "", //death_date
    "243": false, //death_reason
    "244": "Empty", //MI
    "245": "", //MI_date
    "246": false, //MI_Target_vessel
    "247": "Empty", //Ischemic_stroke
    "248": "", //Ischemic_stroke_date 
    "249": "Empty", //TLR
    "2410": "", //TLR_date
    "2411": false, //TLR_Tx
    "2412": "Empty", //TVR
    "2413": "", //TVR_date
    "2414": false, //TVR_Tx
    "2415": "Empty", //OVR
    "2416": "", //OVR_date
    "2417": false, //OVR_Tx
    "2418": "Empty", //Stent_thrombosis
    "2419": "", //Stent_thrombosis_date
    "2420": false, //Stent_thrombosis_type
    "2421": "Empty", //readmission_HF
    "2422": "", //readmission_HF_date
    "2423": "Empty", //readmission_PAD
    "2424": "", //readmission_PAD_date
    "2425": "Empty", //readmission_PTE
    "2426": "", //readmission_PTE_date
    "2427": "Empty", //Bleeding
    "2428": "", //Bleeding_date
    "2429": false, //Bleeding_type
    "2430": false, //Bleeding_site
    "2431": "", //Bleeding_site_other
    "2432": false, //Bleeding_transfusion
    "2433": "", //Bleeding_transfusion_unit
    "2434": "Empty", //Cancer
    "2435": "", //Cancer_date
    "2436": "", //Cancer_location
    "2437": "Empty", //f/u_CAG
    "2438": "", //f/u_CAG_date
    "2439": "Empty", //f/u_loss
    "2440": "", //f/u_loss_date


    //PCI

    //PCI - Before PCI medication _ 13개
    "311": "Empty", //P2Y12I loading
    "312": "", //P2Y12I loading_name
    "313": "", //P2Y12I loading_dose
    "314": "Empty", //Statin loading
    "315": "", //Statin loading_name
    "316": "", //Statin loading_dose
    "317": false, //UFH
    "318": false, //LMWH
    "319": "Empty", //GPI
    "3110": false, //GPI_1
    "3111": false, //GPI_2
    "3112": "Empty", //thrombolytics
    "3113": "", //thrombolytics_Needle_time


    //PCI - Patient level CAG and PCI data _ 58개
    "321": false, //LM
    "322": false, //LAD
    "323": false, //LCS
    "324": false, //RCA
    "325": false, //SVG
    "326": false, //AG
    
    "327": "", //Syntax score_pre
    "328": "", //Syntax score_post
    "329": "", //Gensini's score
    "3210": "", //CAB score
    "3211": false, //Target vessel

    "3212": false, //heavy calcification
    "3213": false, //bifurcation
    "3214": false, //thrombus
    "3215": false, //CTO
    "3216": false, //ISR
    "3217": false, //BMS
    "3218": false, //ICR_DES
    "3219": false, //stent thrombosis
    "3220": false, //Ao-ostial_RCA
    "3221": false, //Ao-ostial_LM
    "3222": false, //Ao-ostial_SVG
    "3223": false, //branch-ostial_LAD
    "3224": false, //branch-ostial_LCX
    "3225": false, //aneurysm or ectasia

    "3226": false, //Thrombosuction
    "3227": false, //Atherectomy-Rotablator
    "3228": false, //IABP
    "3229": false, //ECMO
    "3230": false, //TPM

    "3231": false, //> 2`AVB
    "3232": false, //VT/VF_pre
    "3233": false, //VT/VF_in
    "3234": false, //VT/VF_post<48h
    "3235": false, //VT/VF_post>48h
    "3236": false, //new AF
    "3237": false, //AIVR

    "3238": false, //overlap stenting
    "3239": false, //2-stent in bifurcation
    "3240": false, //staged PCI
    "3241": false, //direct stenting (no pre-dilation)
    "3242": false, //multivessel stenting
    "3243": false, //DEB

    "3244": false, //LM
    "3245": false, //LAD
    "3246": false, //LCX
    "3247": false, //RCA
    "3248": false, //SVG
    "3249": false, //AG

    "3250": "", //Total Number
    "3251": "", //Max. size
    "3252": "", //Min. size
    "3253": "", //Total stent length
    "3254": "", //Maimal stent balloon pressure
    "3255": false, //IVUS
    "3256": false, //FFR
    "3257": false, //iFR
    "3258": false, //OCT


    //Lesion level PCI data

    //Target lesion
    "331": "", //Target lesion_date
    "332": false, //Lesion segment
    "333": false, //none
    "334": false, //Calcification
    "335": false, //LM
    "336": false, //LM-bifurction
    "337": false, //non-LM bifurcation
    "338": false, //CTO
    "339": false, //DES-ISR
    "3310": false, //BMS-ISR
    "3311": false, //Aorto-ostial
    "3312": false, //Branch-ostial

    "3313": "", //ACC/AHA type2

    //DES or DEB name_1
    "3314": false, //Cypher
    "3315": false, //Taxus
    "3316": false, //Xience-V
    "3317": false, //Promus
    "3318": false, //Endeavor-S
    "3319": false, //Endeavor-R
    "3320": false, //Endeavor-I
    "3321": false, //R-Onyx
    "3322": false, //Coro-P
    "3323": false, //PICO
    "3324": false, //Xience-A
    "3325": false, //Xience-P
    "3326": false, //Xience-X
    "3327": false, //Xience-S
    "3328": false, //Promus-E
    "3329": false, //Promus-P
    "3330": false, //SYNERGY
    "3331": false, //Novori
    "3332": false, //Biomatrix
    "3333": false, //Biofreedom
    "3334": false, //Orsiro
    "3335": false, //DESyne
    "3336": false, //Biomime
    "3337": false, //Sequent DEB
    "3338": "", //DES or DEB size(diameter, mm)
    "3339": "", //DES or DEB size(length, mm)

    //DES or DEB name_2
    "3340": false, //Cypher
    "3341": false, //Taxus
    "3342": false, //Xience-V
    "3343": false, //Promus
    "3344": false, //Endeavor-S
    "3345": false, //Endeavor-R
    "3346": false, //Endeavor-I
    "3347": false, //R-Onyx
    "3348": false, //Coro-P
    "3349": false, //PICO
    "3350": false, //Xience-A
    "3351": false, //Xience-P
    "3352": false, //Xience-X
    "3353": false, //Xience-S
    "3354": false, //Promus-E
    "3355": false, //Promus-P
    "3356": false, //SYNERGY
    "3357": false, //Novori
    "3358": false, //Biomatrix
    "3359": false, //Biofreedom
    "3360": false, //Orsiro
    "3361": false, //DESyne
    "3362": false, //Biomime
    "3363": false, //Sequent DEB
    "3364": "", //DES or DEB size(diameter, mm)
    "3365": "", //DES or DEB size(length, mm)

    //DES or DEB name_3
    "3366": false, //Cypher
    "3367": false, //Taxus
    "3368": false, //Xience-V
    "3369": false, //Promus
    "3370": false, //Endeavor-S
    "3371": false, //Endeavor-R
    "3372": false, //Endeavor-I
    "3373": false, //R-Onyx
    "3374": false, //Coro-P
    "3375": false, //PICO
    "3376": false, //Xience-A
    "3377": false, //Xience-P
    "3378": false, //Xience-X
    "3379": false, //Xience-S
    "3380": false, //Promus-E
    "3381": false, //Promus-P
    "3382": false, //SYNERGY
    "3383": false, //Novori
    "3384": false, //Biomatrix
    "3385": false, //Biofreedom
    "3386": false, //Orsiro
    "3387": false, //DESyne
    "3388": false, //Biomime
    "3389": false, //Sequent DEB
    "3390": "", //DES or DEB size(diameter, mm)
    "3391": "", //DES or DEB size(length, mm)

    //DES or DEB name_4
    "3392": false, //Cypher
    "3393": false, //Taxus
    "3394": false, //Xience-V
    "3395": false, //Promus
    "3396": false, //Endeavor-S
    "3397": false, //Endeavor-R
    "3398": false, //Endeavor-I
    "3399": false, //R-Onyx
    "33100": false, //Coro-P
    "33101": false, //PICO
    "33102": false, //Xience-A
    "33103": false, //Xience-P
    "33104": false, //Xience-X
    "33105": false, //Xience-S
    "33106": false, //Promus-E
    "33107": false, //Promus-P
    "33108": false, //SYNERGY
    "33109": false, //Novori
    "33110": false, //Biomatrix
    "33111": false, //Biofreedom
    "33112": false, //Orsiro
    "33113": false, //DESyne
    "33114": false, //Biomime
    "33115": false, //Sequent DEB
    "33116": "", //DES or DEB size(diameter, mm)
    "33117": "", //DES or DEB size(length, mm)

    //Stenting technique4)
    "33118": false, //none
    "33119": false, //Overlapping
    "33120": false, //Kissing stenting
    "33121": false, //stenting
    "33122": false, //Culotte stenting
    "33123": false, //Crushing
    "33124": false, //Direct stenting

    //Balloon technique5)
    "33125": false, //no additional balloon
    "33126": false, //stent balloon adjunctive
    "33127": false, //NC balloon adjunctive
    "33128": false, //Kissing balloon
    "33129": false, //sequential balloon
    "33130": false, //POT

    "33131": "", //QCA pre mean ref
    "33132": "", //QCA pre MLD
    "33133": "", //pre % DS
    "33134": "", //Lesion length
    "33135": "", //QCA post mean ref
    "33136": "", //QCA in-stent MLD
    "33137": "", //post % stent DS
    "33138": "", //prox seg MLD
    "33139": "", //distal seg MLD
    "33140": "", //pre TIMI flow
    "33141": "", //post TIMI flow
    "33142": "", //pre TIMI frame c.
    "33143": "", //post TIMI frame c.
    "33144": "", //pre TPG
    "33145": "", //post TPG


    //Non culplit_1
    //Lesion level PCI data
    "33146": "", //Non culplit_1
    "33147": false, //Lesion segment
    "33148": false, //none
    "33149": false, //Calcification
    "33150": false, //LM
    "33151": false, //LM-bifurction
    "33152": false, //non-LM bifurcation
    "33153": false, //CTO
    "33154": false, //DES-ISR
    "33155": false, //BMS-ISR
    "33156": false, //Aorto-ostial
    "33157": false, //Branch-ostial

    "33158": "", //ACC/AHA type2

    //DES or DEB name_1
    "33159": false, //Cypher
    "33160": false, //Taxus
    "33161": false, //Xience-V
    "33162": false, //Promus
    "33163": false, //Endeavor-S
    "33164": false, //Endeavor-R
    "33165": false, //Endeavor-I
    "33166": false, //R-Onyx
    "33167": false, //Coro-P
    "33168": false, //PICO
    "33169": false, //Xience-A
    "33170": false, //Xience-P
    "33171": false, //xience-X
    "33172": false, //xience-S
    "33173": false, //Promus-E
    "33174": false, //Promus-P
    "33175": false, //SYNERGY
    "33176": false, //Novori
    "33177": false, //Biomatrix
    "33178": false, //Biofreedom
    "33179": false, //Orsiro
    "33180": false, //DESyne
    "33181": false, //Biomime
    "33182": false, //Sequent DEB
    "33183": "", //DES or DEB size(diameter, mm)
    "33184": "", //DES or DEB size(length, mm)

    //DES or DEB name_2
    "33185": false, //Cypher
    "33186": false, //Taxus
    "33187": false, //Xience-V
    "33188": false, //Promus
    "33189": false, //Endeavor-S
    "33190": false, //Endeavor-R
    "33191": false, //Endeavor-I
    "33192": false, //R-Onyx
    "33193": false, //Coro-P
    "33194": false, //PICO
    "33195": false, //Xience-A
    "33196": false, //Xience-P
    "33197": false, //Xience-X
    "33198": false, //Xience-S
    "33199": false, //Promus-E
    "33200": false, //Promus-P
    "33201": false, //SYNERGY
    "33202": false, //Novori
    "33203": false, //Biomatrix
    "33204": false, //Biofreedom
    "33205": false, //Orsiro
    "33206": false, //DESyne
    "33207": false, //Biomime
    "33208": false, //Sequent DEB
    "33209": "", //DES or DEB size(diameter, mm)
    "33210": "", //DES or DEB size(length, mm)

    //DES or DEB name_3
    "33211": false, //Cypher
    "33212": false, //Taxus
    "33213": false, //Xience-V
    "33214": false, //Promus
    "33215": false, //Endeavor-S
    "33216": false, //Endeavor-R
    "33217": false, //Endeavor-I
    "33218": false, //R-Onyx
    "33219": false, //Coro-P
    "33220": false, //PICO
    "33221": false, //Xience-A
    "33222": false, //Xience-P
    "33223": false, //Xience-X
    "33224": false, //Xience-S
    "33225": false, //Promus-E
    "33226": false, //Promus-P
    "33227": false, //SYNERGY
    "33228": false, //Novori
    "33229": false, //Biomatrix
    "33230": false, //Biofreedom
    "33231": false, //Orsiro
    "33232": false, //DESyne
    "33233": false, //Biomime
    "33234": false, //Sequent DEB
    "33235": "", //DES or DEB size(diameter, mm)
    "33236": "", //DES or DEB size(length, mm)

    //DES or DEB name_4
    "33237": false, //Cypher
    "33238": false, //Taxus
    "33239": false, //Xience-V
    "33240": false, //Promus
    "33241": false, //Endeavor-S
    "33242": false, //Endeavor-R
    "33243": false, //Endeavor-I
    "33244": false, //R-Onyx
    "33245": false, //Coro-P
    "33246": false, //PICO
    "33247": false, //Xience-A
    "33248": false, //Xience-P
    "33249": false, //Xience-X
    "33250": false, //Xience-S
    "33251": false, //Promus-E
    "33252": false, //Promus-P
    "33253": false, //SYNERGY
    "33254": false, //Novori
    "33255": false, //Biomatrix
    "33256": false, //Biofreedom
    "33257": false, //Orsiro
    "33258": false, //DESyne
    "33259": false, //Biomime
    "33260": false, //Sequent DEB
    "33261": "", //DES or DEB size(diameter, mm)
    "33262": "", //DES or DEB size(length, mm)

    //Stenting technique4)
    "33263": false, //none
    "33264": false, //Overlapping
    "33265": false, //Kissing stenting
    "33266": false, //stenting
    "33267": false, //Culotte stenting
    "33268": false, //Crushing
    "33269": false, //Direct stenting

    //Balloon technique5)
    "33270": false, //no additional balloon
    "33271": false, //stent balloon adjunctive
    "33272": false, //NC balloon adjunctive
    "33273": false, //Kissing balloon
    "33274": false, //sequential balloon
    "33275": false, //POT

    "33276": "", //QCA pre mean ref
    "33277": "", //QCA pre MLD
    "33278": "", //pre % DS
    "33279": "", //Lesion length
    "33280": "", //QCA post mean ref
    "33281": "", //QCA in-stent MLD
    "33282": "", //post % stent DS
    "33283": "", //prox seg MLD
    "33284": "", //distal seg MLD
    "33285": "", //pre TIMI flow
    "33286": "", //post TIMI flow
    "33287": "", //pre TIMI frame c.
    "33288": "", //post TIMI frame c.
    "33289": "", //pre TPG
    "33290": "", //post TPG


    //Non culplit_2
    //Lesion level PCI data
    "33291": "", //Non culplit_2
    "33292": false, //Lesion segment
    "33293": false, //none
    "33294": false, //Calcification
    "33295": false, //LM
    "33296": false, //LM-bifurction
    "33297": false, //non-LM bifurcation
    "33298": false, //CTO
    "33299": false, //DES-ISR
    "33300": false, //BMS-ISR
    "33301": false, //Aorto-ostial
    "33302": false, //Branch-ostial

    "33303": "", //ACC/AHA type2

    //DES or DEB name_1
    "33304": false, //Cypher
    "33305": false, //Taxus
    "33306": false, //Xience-V
    "33307": false, //Promus
    "33308": false, //Endeavor-S
    "33309": false, //Endeavor-R
    "33310": false, //Endeavor-I
    "33311": false, //R-Onyx
    "33312": false, //Coro-P
    "33313": false, //PICO
    "33314": false, //Xience-A
    "33315": false, //Xience-P
    "33316": false, //xience-X
    "33317": false, //xience-S
    "33318": false, //Promus-E
    "33319": false, //Promus-P
    "33320": false, //SYNERGY
    "33321": false, //Novori
    "33322": false, //Biomatrix
    "33323": false, //Biofreedom
    "33324": false, //Orsiro
    "33325": false, //DESyne
    "33326": false, //Biomime
    "33327": false, //Sequent DEB
    "33328": "", //DES or DEB size(diameter, mm)
    "33329": "", //DES or DEB size(length, mm)

    //DES or DEB name_2
    "33330": false, //Cypher
    "33331": false, //Taxus
    "33332": false, //Xience-V
    "33333": false, //Promus
    "33334": false, //Endeavor-S
    "33335": false, //Endeavor-R
    "33336": false, //Endeavor-I
    "33337": false, //R-Onyx
    "33338": false, //Coro-P
    "33339": false, //PICO
    "33340": false, //Xience-A
    "33341": false, //Xience-P
    "33342": false, //Xience-X
    "33343": false, //Xience-S
    "33344": false, //Promus-E
    "33345": false, //Promus-P
    "33346": false, //SYNERGY
    "33347": false, //Novori
    "33348": false, //Biomatrix
    "33349": false, //Biofreedom
    "33350": false, //Orsiro
    "33351": false, //DESyne
    "33352": false, //Biomime
    "33353": false, //Sequent DEB
    "33354": "", //DES or DEB size(diameter, mm)
    "33355": "", //DES or DEB size(length, mm)

    //DES or DEB name_3
    "33356": false, //Cypher
    "33357": false, //Taxus
    "33358": false, //Xience-V
    "33359": false, //Promus
    "33360": false, //Endeavor-S
    "33361": false, //Endeavor-R
    "33362": false, //Endeavor-I
    "33363": false, //R-Onyx
    "33364": false, //Coro-P
    "33365": false, //PICO
    "33366": false, //Xience-A
    "33367": false, //Xience-P
    "33368": false, //Xience-X
    "33369": false, //Xience-S
    "33370": false, //Promus-E
    "33371": false, //Promus-P
    "33372": false, //SYNERGY
    "33373": false, //Novori
    "33374": false, //Biomatrix
    "33375": false, //Biofreedom
    "33376": false, //Orsiro
    "33377": false, //DESyne
    "33378": false, //Biomime
    "33379": false, //Sequent DEB
    "33380": "", //DES or DEB size(diameter, mm)
    "33381": "", //DES or DEB size(length, mm)

    //DES or DEB name_4
    "33382": false, //Cypher
    "33383": false, //Taxus
    "33384": false, //Xience-V
    "33385": false, //Promus
    "33386": false, //Endeavor-S
    "33387": false, //Endeavor-R
    "33388": false, //Endeavor-I
    "33389": false, //R-Onyx
    "33390": false, //Coro-P
    "33391": false, //PICO
    "33392": false, //Xience-A
    "33393": false, //Xience-P
    "33394": false, //Xience-X
    "33395": false, //Xience-S
    "33396": false, //Promus-E
    "33397": false, //Promus-P
    "33398": false, //SYNERGY
    "33399": false, //Novori
    "33400": false, //Biomatrix
    "33401": false, //Biofreedom
    "33402": false, //Orsiro
    "33403": false, //DESyne
    "33404": false, //Biomime
    "33405": false, //Sequent DEB
    "33406": "", //DES or DEB size(diameter, mm)
    "33407": "", //DES or DEB size(length, mm)

    //Stenting technique4)
    "33408": false, //none
    "33409": false, //Overlapping
    "33410": false, //Kissing stenting
    "33411": false, //stenting
    "33412": false, //Culotte stenting
    "33413": false, //Crushing
    "33414": false, //Direct stenting

    //Balloon technique5)
    "33415": false, //no additional balloon
    "33416": false, //stent balloon adjunctive
    "33417": false, //NC balloon adjunctive
    "33418": false, //Kissing balloon
    "33419": false, //sequential balloon
    "33420": false, //POT

    "33421": "", //QCA pre mean ref
    "33422": "", //QCA pre MLD
    "33423": "", //pre % DS
    "33424": "", //Lesion length
    "33425": "", //QCA post mean ref
    "33426": "", //QCA in-stent MLD
    "33427": "", //post % stent DS
    "33428": "", //prox seg MLD
    "33429": "", //distal seg MLD
    "33430": "", //pre TIMI flow
    "33431": "", //post TIMI flow
    "33432": "", //pre TIMI frame c.
    "33433": "", //post TIMI frame c.
    "33434": "", //pre TPG
    "33435": "", //post TPG


    //Non culplit_3
    //Lesion level PCI data
    "33436": "", //Non culplit_3
    "33437": false, //Lesion segment
    "33438": false, //none
    "33439": false, //Calcification
    "33440": false, //LM
    "33441": false, //LM-bifurction
    "33442": false, //non-LM bifurcation
    "33443": false, //CTO
    "33444": false, //DES-ISR
    "33445": false, //BMS-ISR
    "33446": false, //Aorto-ostial
    "33447": false, //Branch-ostial

    "33448": "", //ACC/AHA type2

    //DES or DEB name_1
    "33449": false, //Cypher
    "33450": false, //Taxus
    "33451": false, //Xience-V
    "33452": false, //Promus
    "33453": false, //Endeavor-S
    "33454": false, //Endeavor-R
    "33455": false, //Endeavor-I
    "33456": false, //R-Onyx
    "33457": false, //Coro-P
    "33458": false, //PICO
    "33459": false, //Xience-A
    "33460": false, //Xience-P
    "33461": false, //xience-X
    "33462": false, //xience-S
    "33463": false, //Promus-E
    "33464": false, //Promus-P
    "33465": false, //SYNERGY
    "33466": false, //Novori
    "33467": false, //Biomatrix
    "33468": false, //Biofreedom
    "33469": false, //Orsiro
    "33470": false, //DESyne
    "33471": false, //Biomime
    "33472": false, //Sequent DEB
    "33473": "", //DES or DEB size(diameter, mm)
    "33474": "", //DES or DEB size(length, mm)

    //DES or DEB name_2
    "33475": false, //Cypher
    "33476": false, //Taxus
    "33477": false, //Xience-V
    "33478": false, //Promus
    "33479": false, //Endeavor-S
    "33480": false, //Endeavor-R
    "33481": false, //Endeavor-I
    "33482": false, //R-Onyx
    "33483": false, //Coro-P
    "33484": false, //PICO
    "33485": false, //Xience-A
    "33486": false, //Xience-P
    "33487": false, //Xience-X
    "33488": false, //Xience-S
    "33489": false, //Promus-E
    "33490": false, //Promus-P
    "33491": false, //SYNERGY
    "33492": false, //Novori
    "33493": false, //Biomatrix
    "33494": false, //Biofreedom
    "33495": false, //Orsiro
    "33496": false, //DESyne
    "33497": false, //Biomime
    "33498": false, //Sequent DEB
    "33499": "", //DES or DEB size(diameter, mm)
    "33500": "", //DES or DEB size(length, mm)

    //DES or DEB name_3
    "33501": false, //Cypher
    "33502": false, //Taxus
    "33503": false, //Xience-V
    "33504": false, //Promus
    "33505": false, //Endeavor-S
    "33506": false, //Endeavor-R
    "33507": false, //Endeavor-I
    "33508": false, //R-Onyx
    "33509": false, //Coro-P
    "33510": false, //PICO
    "33511": false, //Xience-A
    "33512": false, //Xience-P
    "33513": false, //Xience-X
    "33514": false, //Xience-S
    "33515": false, //Promus-E
    "33516": false, //Promus-P
    "33517": false, //SYNERGY
    "33518": false, //Novori
    "33519": false, //Biomatrix
    "33520": false, //Biofreedom
    "33521": false, //Orsiro
    "33522": false, //DESyne
    "33523": false, //Biomime
    "33524": false, //Sequent DEB
    "33525": "", //DES or DEB size(diameter, mm)
    "33526": "", //DES or DEB size(length, mm)

    //DES or DEB name_4
    "33527": false, //Cypher
    "33528": false, //Taxus
    "33529": false, //Xience-V
    "33530": false, //Promus
    "33531": false, //Endeavor-S
    "33532": false, //Endeavor-R
    "33533": false, //Endeavor-I
    "33534": false, //R-Onyx
    "33535": false, //Coro-P
    "33536": false, //PICO
    "33537": false, //Xience-A
    "33538": false, //Xience-P
    "33539": false, //Xience-X
    "33540": false, //Xience-S
    "33541": false, //Promus-E
    "33542": false, //Promus-P
    "33543": false, //SYNERGY
    "33544": false, //Novori
    "33545": false, //Biomatrix
    "33546": false, //Biofreedom
    "33547": false, //Orsiro
    "33548": false, //DESyne
    "33549": false, //Biomime
    "33550": false, //Sequent DEB
    "33551": "", //DES or DEB size(diameter, mm)
    "33552": "", //DES or DEB size(length, mm)

    //Stenting technique4)
    "33553": false, //none
    "33554": false, //Overlapping
    "33555": false, //Kissing stenting
    "33556": false, //stenting
    "33557": false, //Culotte stenting
    "33558": false, //Crushing
    "33559": false, //Direct stenting

    //Balloon technique5)
    "33560": false, //no additional balloon
    "33561": false, //stent balloon adjunctive
    "33562": false, //NC balloon adjunctive
    "33563": false, //Kissing balloon
    "33564": false, //sequential balloon
    "33565": false, //POT

    "33566": "", //QCA pre mean ref
    "33567": "", //QCA pre MLD
    "33568": "", //pre % DS
    "33569": "", //Lesion length
    "33570": "", //QCA post mean ref
    "33571": "", //QCA in-stent MLD
    "33572": "", //post % stent DS
    "33573": "", //prox seg MLD
    "33574": "", //distal seg MLD
    "33575": "", //pre TIMI flow
    "33576": "", //post TIMI flow
    "33577": "", //pre TIMI frame c.
    "33578": "", //post TIMI frame c.
    "33579": "", //pre TPG
    "33580": "", //post TPG

    ///////////////////////////
    //etc PCI data
    "341": "Empty", //PCYN
    "342": "", //slow/no reflow(TIMI 0,1)
    "343": "", //distal embolization
    "344": "", //SBO
    "345": "", //perforation or rupture
    "346": "", //Abrupt vessel closure
    "347": "", //major dissection
    "348": "", //emergency CABG

    "349": "", //Access site

    "3410": "", //Closure device type
    "3411": "Empty", //Device success
    "3412": false, //if, No


    ////////////////////////////
    //NOTE LAB
    "401": "Initial", //Lab check

    //Initial
    "411": "", //date
    "412": "", //WBC
    "413": "", //neutrophi
    "414": "", //lympho
    "415": "", //mono
    "416": "", //eosinophil
    "417": "", //Hb
    "418": "", //Hct
    "419": "", //RDW
    "4110": "", //PLT
    "4111": "", //MPV
    "4112": "", //PDW
    "4113": "", //IPW
    "4114": "", //BUN
    "4115": "", //Cr
    "4116": "", //Cystatic C

    "4117": "", //CK
    "4118": "", //CK-MB
    "4119": "", //TnT
    "4120": "", //CRP
    "4121": "", //IMA
    "4122": "", //fibrinogen
    "4123": "", //D-dimer
    "4124": "", //ARU(PFA)
    "4125": "", //ARU(Multiplate)
    "4126": "", //PRU(Multiplate)
    "4127": "", //PRU(Verifynow)
    "4128": "", //%inhibition(Verifynow)
    "4129": "", //PT
    "4130": "", //APTT
    "4131": "", //TB
    "4132": "", //GGT
    "4133": "", //ALP
    "4134": "", //AST
    "4135": "", //ALT
    "4136": "", //TC
    "4137": "", //TG
    "4138": "", //HDL
    "4139": "", //LDL
    "4140": "", //Lp(a)
    "4141": "", //Apo A
    "4142": "", //Apo B
    "4143": "", //sd-LDL_Pattern
    "4144": "", //sd-Mean particle size(Å)
    "4145": "", //sd-LDL_%sdLDL(%)
    "4146": "", //sd-LDL_sdLDL(mg/dL)
    "4147": "", //homocystein
    "4148": "", //Na
    "4149": "", //K
    "4150": "", //Mg
    "4151": "", //uric acid
    "4152": "", //TSH
    "4153": "", //fT4
    "4154": "", //glucose
    "4155": "", //insulin
    "4156": "", //HbA1C
    "4157": "", //BNP
    "4158": "", //pro-BNP
    "4159": "", //ST2


    //NOTE Lab data - pre peak
    "421": false, //date
    "422": false, //WBC
    "423": false, //neutrophi
    "424": false, //lympho
    "425": false, //mono
    "426": false, //eosinophil
    "427": false, //Hb
    "428": false, //Hct
    "429": false, //RDW
    "4210": false, //PLT
    "4211": false, //MPV
    "4212": false, //PDW
    "4213": false, //IPF
    "4214": false, //BUN
    "4215": false, //Cr
    "4216": false, //Cystatic C
    "4217": false, //CK
    "4218": false, //CK-MB
    "4219": false, //TnT
    "4220": false, //CRP
    "4221": false, //IMA
    "4222": false, //fibrinogen
    "4223": false, //D-dimer

    //NOTE Lab data - post 8hr's
    "431": false, //date
    "432": false, //WBC
    "433": false, //neutrophi
    "434": false, //lympho
    "435": false, //mono
    "436": false, //eosinophil
    "437": false, //Hb
    "438": false, //Hct
    "439": false, //RDW
    "4310": false, //PLT
    "4311": false, //MPV
    "4312": false, //PDW
    "4313": false, //IPF
    "4314": false, //BUN
    "4315": false, //Cr
    "4316": false, //Cystatin C
    "4317": false, //CK
    "4318": false, //CK-MB
    "4319": false, //TnT
    "4320": false, //CRP
    "4321": false, //IMA
    "4322": false, //fibrinogen
    "4323": false, //D-dimer

    //Lab data - post 24hr's
    "441": false, //date
    "442": false, //WBC
    "443": false, //neutrophi
    "444": false, //lympho
    "445": false, //mono
    "446": false, //eosinophil
    "447": false, //Hb
    "448": false, //Hct
    "449": false, //RDW
    "4410": false, //PLT
    "4411": false, //MPV
    "4412": false, //PDW
    "4413": false, //IPF
    "4414": false, //BUN
    "4415": false, //Cr
    "4416": false, //Cystatin C
    "4417": false, //CK
    "4418": false, //CK-MB
    "4419": false, //TnT
    "4420": false, //CRP
    "4421": false, //IMA
    "4422": false, //fibrinogen
    "4423": false, //D-dimer
    "4424": false, //ARU(PFA)
    "4425": false, //ARU(Multiplate)
    "4426": false, //PRU(Multiplate)
    "4427": false, //PRU(Verifynow)
    "4428": false, //%inhibition(Verifynow)

    //Lab data - post 48hr's
    "451": false, //date
    "452": false, //WBC
    "453": false, //neutrophi
    "454": false, //lympho
    "455": false, //mono
    "456": false, //eosinophil
    "457": false, //Hb
    "458": false, //Hct
    "459": false, //RDW
    "4510": false, //PLT
    "4511": false, //MPV
    "4512": false, //PDW
    "4513": false, //IPF
    "4514": false, //BUN
    "4515": false, //Cr
    "4516": false, //Cystatin C
    "4517": false, //CK
    "4518": false, //CK-MB
    "4519": false, //TnT
    "4520": false, //CRP
    "4521": false, //IMA
    "4522": false, //fibrinogen
    "4523": false, //D-dimer
    "4524": false, //ARU(PFA)
    "4525": false, //ARU(Multiplate)
    "4526": false, //PRU(Multiplate)
    "4527": false, //PRU(Verifynow)
    "4528": false, //%inhibition(Verifynow)

    //Lab data - discharge
    "461": false, //date
    "462": false, //WBC
    "463": false, //neutrophi
    "464": false, //lympho
    "465": false, //mono
    "466": false, //eosinophil
    "467": false, //Hb
    "468": false, //Hct
    "469": false, //RDW
    "4610": false, //PLT
    "4611": false, //MPV
    "4612": false, //PDW
    "4613": false, //IPF
    "4614": false, //BUN
    "4615": false, //Cr
    "4616": false, //Cystatin C
    "4617": false, //CK
    "4618": false, //CK-MB
    "4619": false, //TnT
    "4620": false, //CRP
    "4621": false, //IMA
    "4622": false, //fibrinogen
    "4623": false, //D-dimer
    "4624": false, //ARU(PFA)
    "4625": false, //ARU(Multiplate)
    "4626": false, //PRU(Multiplate)
    "4627": false, //PRU(Verifynow)
    "4628": false, //%inhibition(Verifynow)

    //Lab data - 1mo
    "471": "", //date
    "472": false, //WBC
    "473": false, //neutrophi
    "474": false, //lympho
    "475": false, //mono
    "476": false, //eosinophil
    "477": false, //Hb
    "478": false, //Hct
    "479": false, //RDW
    "4710": false, //PLT
    "4711": false, //MPV
    "4712": false, //PDW
    "4713": false, //IPW
    "4714": false, //BUN
    "4715": false, //Cr
    "4716": false, //Cystatic C

    "4717": false, //CK
    "4718": false, //CK-MB
    "4719": false, //TnT
    "4720": false, //CRP
    "4721": false, //IMA
    "4722": false, //fibrinogen
    "4723": false, //D-dimer
    "4724": false, //ARU(PFA)
    "4725": false, //ARU(Multiplate)
    "4726": false, //PRU(Multiplate)
    "4727": false, //PRU(Verifynow)
    "4728": false, //%inhibition(Verifynow)
    "4729": false, //PT
    "4730": false, //APTT
    "4731": false, //TB
    "4732": false, //GGT
    "4733": false, //ALP
    "4734": false, //AST
    "4735": false, //ALT
    "4736": false, //TC
    "4737": false, //TG
    "4738": false, //HDL
    "4739": false, //LDL
    "4740": false, //Lp(a)
    "4741": false, //Apo A
    "4742": false, //Apo B
    "4743": false, //sd-LDL_Pattern
    "4744": false, //sd-Mean particle size(Å)
    "4745": false, //sd-LDL_%sdLDL(%)
    "4746": false, //sd-LDL_sdLDL(mg/dL)
    "4747": false, //homocystein
    "4748": false, //Na
    "4749": false, //K
    "4750": false, //Mg
    "4751": false, //uric acid
    "4752": false, //TSH
    "4753": false, //fT4
    "4754": false, //glucose
    "4755": false, //insulin
    "4756": false, //HbA1C
    "4757": false, //BNP
    "4758": false, //pro-BNP
    "4759": false, //ST2

    //Lab data - 1yr
    "481": "", //date
    "482": false, //WBC
    "483": false, //neutrophi
    "484": false, //lympho
    "485": false, //mono
    "486": false, //eosinophil
    "487": false, //Hb
    "488": false, //Hct
    "489": false, //RDW
    "4810": false, //PLT
    "4811": false, //MPV
    "4812": false, //PDW
    "4813": false, //IPW
    "4814": false, //BUN
    "4815": false, //Cr
    "4816": false, //Cystatic C

    "4817": false, //CK
    "4818": false, //CK-MB
    "4819": false, //TnT
    "4820": false, //CRP
    "4821": false, //IMA
    "4822": false, //fibrinogen
    "4823": false, //D-dimer
    "4824": false, //ARU(PFA)
    "4825": false, //ARU(Multiplate)
    "4826": false, //PRU(Multiplate)
    "4827": false, //PRU(Verifynow)
    "4828": false, //%inhibition(Verifynow)
    "4829": false, //PT
    "4830": false, //APTT
    "4831": false, //TB
    "4832": false, //GGT
    "4833": false, //ALP
    "4834": false, //AST
    "4835": false, //ALT
    "4836": false, //TC
    "4837": false, //TG
    "4838": false, //HDL
    "4839": false, //LDL
    "4840": false, //Lp(a)
    "4841": false, //Apo A
    "4842": false, //Apo B
    "4843": false, //sd-LDL_Pattern
    "4844": false, //sd-Mean particle size(Å)
    "4845": false, //sd-LDL_%sdLDL(%)
    "4846": false, //sd-LDL_sdLDL(mg/dL)
    "4847": false, //homocystein
    "4848": false, //Na
    "4849": false, //K
    "4850": false, //Mg
    "4851": false, //uric acid
    "4852": false, //TSH
    "4853": false, //fT4
    "4854": false, //glucose
    "4855": false, //insulin
    "4856": false, //HbA1C
    "4857": false, //BNP
    "4858": false, //pro-BNP
    "4859": false, //ST2


    ////////////////////////////
    //Test
    //Test data - Initial
    "501": false, //Test Select

    "511": "", //EF
    "512": "", //Lt baPWV
    "513": "", //Rt baPWV
    "514": "", //LT ABI
    "515": "", //Rt ABI
    
    //M-spect
    "516": "", //M-spect date
    "517": "", //SSS
    "518": "", //SRS
    "519": "", //SDS
    "5110": "", //Stress defect
    "5111": "", //Rest defect
    "5112": "", //SMS
    "5113": "", //STS
    "5114": "", //EDV
    "5115": "", //ESV
    "5116": "", //EF
    
    //체성분
    "5117": "", //Ht
    "5118": "", //Wt
    "5119": "", //골격근량
    "5120": "", //체지방량
    "5121": "", //체지방률
    "5122": "", //좌상지 근육량
    "5123": "", //우상지 근육량
    "5124": "", //좌하지 근육량
    "5125": "", //우하지 근육량
    "5126": "", //몸통 근육량
    "5127": "", //WC
    "5128": "", //HC
    "5129": "", //내장지방
    "5130": "", //WH ratio
    
    //Test data - 1mo
    "521": "", //EF
    "522": "", //Lt baPWV
    "523": "", //Rt baPWV
    "524": "", //Lt ABI
    "525": "", //Rt ABI
    
    //Test data - 1yr
    "531": "", //EF    
    "532": "", //Lt baPWV
    "533": "", //Rt baPWV
    "534": "", //Lt ABI
    "535": "", //Rt ABI
    "536": "", //M-spect date
    "537": "", //SSS
    "538": "", //SRS
    "539": "", //SDS
    "5310": "", //Stress defect
    "5311": "", //Rest defect
    "5312": "", //SMS
    "5313": "", //STS
    "5314": "", //EDV
    "5315": "", //ESV
    "5316": "", //EF
}