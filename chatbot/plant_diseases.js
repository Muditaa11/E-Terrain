const plantDiseaseData = [
    
        {
            "plant": "Rice",
            "disease": "Rice Blast",
            "symptoms": [
                "Fungal disease causing lesions on leaves",
                "stems",
                "and panicles"
            ],
            "treatment": "Use resistant varieties, apply fungicides (e.g., Tricyclazole), and practice crop rotation"
        },
        {
            "plant": "Rice",
            "disease": "Bacterial Leaf Blight",
            "symptoms": ["Causes yellowing and wilting of leaves"],
            "treatment": "Use resistant varieties, maintain proper drainage, and apply copper-based bactericides"
        },
        {
            "plant": "Rice",
            
            "disease": "Sheath Blight",
            "symptoms": [
                "Fungal disease affecting the rice sheath",
                "stems"
            ],
            "treatment": "Use resistant varieties, apply fungicides like Isoprothiolane and Tricyclazole, and practice balanced fertilization"
        },
        {
            "plant": "Rice",
            "disease": "Brown Spot",
            "symptoms": ["A fungal disease leading to brown lesions on leaves"],
            "treatment": "Apply fungicides, improve drainage, and use resistant varieties"
        },
        {
            "plant": "Rice",
            "disease": "Rice Tungro Virus",
            "symptoms": ["Viral disease transmitted by leafhoppers, causing stunted growth and yellowing"],
            "treatment": "Use resistant varieties, manage leafhopper populations, and practice crop management"
        },
        {
            "plant": "Wheat",
            "disease": "Stripe Rust",
            "symptoms": ["Yellow or reddish pustules on leaves and stems"],
            "treatment": "Use resistant varieties, apply suitable fungicides (e.g., Propiconazole), and practice crop rotation"
        },
        {
            "plant": "Wheat",
            "disease": "Fusarium Wilt",
            "symptoms": ["Yellowing and wilting of leaves"],
            "treatment": "Use resistant varieties, practice crop rotation, and apply fungicides"
        },
        {
            "plant": "Wheat",
            "disease": "Bacterial Blight",
            "symptoms": ["Water-soaked lesions on leaves"],
            "treatment": "Use resistant varieties and manage irrigation properly"
        },
        {
            "plant": "Wheat",
            "disease": "Loose Smut",
            "symptoms": ["Deformed heads and black spore masses"],
            "treatment": "Treat seeds with appropriate fungicides before planting"
        },
        {
            "plant": "Maize",
            "disease": "Corn Smut",
            "symptoms": ["Formation of galls or swollen structures"],
            "treatment": "Hand-pick galls, destroy infected plants, and use resistant varieties"
        },
        {
            "plant": "Maize",
            "disease": "Grey Leaf Spot",
            "symptoms": ["Fungal disease with lesions on leaves"],
            "treatment": "Apply fungicides and practice crop rotation with resistant varieties"
        },
        {
            "plant": "Maize",
            "disease": "Northern Corn Leaf Blight",
            "symptoms": ["Long, grayish lesions on leaves"],
            "treatment": "Apply fungicides and use resistant hybrids"
        },
        {
            "plant": "Maize",
            "disease": "Maize Dwarf Mosaic Virus",
            "symptoms": ["Stunting and leaf curling"],
            "treatment": "Manage aphid populations and use resistant varieties"
        },
        {
            "plant": "Barley",
            "disease": "Leaf Rust",
            "symptoms": ["Yellow to reddish pustules on leaves"],
            "treatment": "Use resistant varieties and apply fungicides"
        },
        {
            "plant": "Barley",
            "disease": "Powdery Mildew",
            "symptoms": ["White powdery coating on leaves"],
            "treatment": "Apply fungicides and practice good air circulation"
        },
        {
            "plant": "Barley",
            "disease": "Scald",
            "symptoms": ["Water-soaked lesions on leaves"],
            "treatment": "Use resistant varieties and apply fungicides"
        },
        {
            "plant": "Millets (Sorghum, Pearl Millet, Finger Millet)",
            "disease": "Downy Mildew",
            "symptoms": [
                "Affects leaves and panicles",
                "leading to stunted growth"
            ],
            "treatment": "Use resistant varieties, apply fungicides like Metalaxyl, and manage soil moisture"
        },
        {
            "plant": "Millets (Sorghum, Pearl Millet, Finger Millet)",
            "disease": "Charcoal Rot",
            "symptoms": [
                "Fungal disease causing premature wilting",
                "death"
            ],
            "treatment": "Improve soil health, use crop rotation with non-susceptible crops, and plant resistant varieties"
        },
        {
            "plant": "Millets (Sorghum, Pearl Millet, Finger Millet)",
            "disease": "Fusarium Head Blight",
            "symptoms": [
                "Affects grains",
                "causing rotting and discoloration"
            ],
            "treatment": "Use fungicides like Tebuconazole, delay planting to avoid disease peaks, and practice crop rotation"
        },
        {
            "plant": "Ragi",
            "disease": "Blast",
            "symptoms": ["Brown lesions on leaves caused by Pyricularia grisea"],
            "treatment": "Use resistant varieties and apply Tricyclazole or Mancozeb"
        },
        {
            "plant": "Ragi",
            "disease": "Brown Spot",
            "symptoms": ["Dark spots on leaves caused by Bipolaris oryzae"],
            "treatment": "Destroy infected debris and spray Carbendazim or Thiophanate-methyl"
        },
        {
            "plant": "Ragi",
            "disease": "Downy Mildew",
            "symptoms": ["Yellowing and white growth on leaves caused by Sclerospora graminicola"],
            "treatment": "Use treated seeds and apply Metalaxyl or Mancozeb"
        },
        {
            "plant": "Ragi",
            "disease": "Bacterial Blight",
            "symptoms": ["Water-soaked lesions caused by Xanthomonas campestris"],
            "treatment": "Avoid overhead irrigation and spray Copper oxychloride or Streptomycin sulfate"
        },
        {
            "plant": "Ragi",
            "disease": "Finger Millet Mosaic Virus",
            "symptoms": ["Mosaic patterns and stunted growth"],
            "treatment": "Remove infected plants and control aphids with Imidacloprid"
        },
        {
            "plant": "Ragi",
            "disease": "Shoot Fly",
            "symptoms": ["Dead central shoot causing stunted growth"],
            "treatment": "Early sowing, destroy crop residues, use treated seeds, and apply Dimethoate"
        },
        {
            "plant": "Chickpeas (Gram)",
            "disease": "Ascochyta Blight",
            "symptoms": ["Fungal disease leading to lesions on stems", "leaves", "and pods"],
            "treatment": "Use resistant varieties, crop rotation, and apply fungicides like Chlorothalonil or Carbendazim"
        },
        {
            "plant": "Chickpeas (Gram)",
            "disease": "Fusarium Wilt",
            "symptoms": ["Causes yellowing and wilting of plants"],
            "treatment": "Use disease-free seeds, resistant varieties, and drench soil with Carbendazim or Trichoderma-based biocontrol agents"
        },
        {
            "plant": "Chickpeas (Gram)",
            "disease": "Dry Root Rot",
            "symptoms": ["Fungal infection leading to root rot and plant death"],
            "treatment": "Improve soil drainage, avoid water stress, and apply fungicides like Carbendazim or Captan to the soil"
        },
        {
            "plant": "Lentils",
            "disease": "Lentil Rust",
            "symptoms": ["Affects leaves and stems, causing rust-colored lesions"],
            "treatment": "Grow resistant varieties and spray fungicides like Mancozeb or Propiconazole"
        },
        {
            "plant": "Lentils",
            "disease": "Botrytis Blight",
            "symptoms": ["Fungal disease causing brown spots and premature death of plant parts"],
            "treatment": "Ensure good air circulation, avoid overhead irrigation, and apply fungicides such as Captan or Carbendazim"
        },
        {
            "plant": "Lentils",
            "disease": "Fusarium Wilt",
            "symptoms": ["Yellowing of leaves and plant death"],
            "treatment": "Use disease-free seeds, resistant varieties, and drench soil with Trichoderma or Carbendazim"
        },
        {
            "plant": "Pigeon Pea (Toor dal)",
            "disease": "Phytophthora Blight",
            "symptoms": ["Affects roots and causes wilting"],
            "treatment": "Ensure proper drainage, avoid waterlogging, and apply fungicides like Metalaxyl or Fosetyl-Al"
        },
        {
            "plant": "Pigeon Pea (Toor dal)",
            "disease": "Pigeon Pea Wilt",
            "symptoms": ["Fungal disease leading to yellowing and wilting"],
            "treatment": "Use wilt-resistant varieties, crop rotation, and drench soil with Carbendazim or Trichoderma-based biofungicides"
        },
        {
            "plant": "Pigeon Pea (Toor dal)",
            "disease": "Powdery Mildew",
            "symptoms": ["White powdery growth on leaves"],
            "treatment": "Maintain good air circulation, avoid overcrowding, and spray sulfur-based fungicides or potassium bicarbonate"
        },
        {
            "plant": "Green Gram (Moong dal)",
            "disease": "Powdery Mildew",
            "symptoms": ["White powdery growth on leaves"],
            "treatment": "Spray sulfur-based fungicides or potassium bicarbonate, use resistant varieties, and improve air circulation"
        },
        {
            "plant": "Green Gram (Moong dal)",
            "disease": "Root Rot",
            "symptoms": ["Fungal infection affecting roots, leading to wilting"],
            "treatment": "Ensure proper soil drainage, avoid overwatering, and treat soil with fungicides like Captan or Carbendazim"
        },
        {
            "plant": "Green Gram (Moong dal)",
            "disease": "Fusarium Wilt",
            "symptoms": ["Causes wilting and yellowing of plants"],
            "treatment": "Use resistant varieties, disease-free seeds, and drench soil with Trichoderma or Carbendazim"
        },
        {
            "plant": "Black Gram (Urad dal)",
            "disease": "Cowpea Rust",
            "symptoms": ["Yellow to reddish-brown pustules on leaves, reducing photosynthesis"],
            "treatment": "Grow resistant varieties and spray fungicides like Mancozeb or Propiconazole"
        },
        {
            "plant": "Black Gram (Urad dal)",
            "disease": "Powdery Mildew",
            "symptoms": ["White powdery growth on leaves, leading to reduced growth and yield"],
            "treatment": "Spray sulfur-based fungicides or potassium bicarbonate, improve ventilation, and reduce humidity"
        },
        {
            "plant": "Black Gram (Urad dal)",
            "disease": "Fusarium Wilt",
            "symptoms": ["Yellowing and wilting of plants, often leading to plant death"],
            "treatment": "Use wilt-resistant varieties, disease-free seeds, and drench soil with Trichoderma or Carbendazim"
        },
        {
            "plant": "Black Gram (Urad dal)",
            "disease": "Bacterial Blight",
            "symptoms": ["Water-soaked lesions on leaves and stems, causing wilting and yield loss"],
            "treatment": "Remove infected plants, avoid overhead irrigation, and spray copper oxychloride or streptomycin sulfate"
        },
        {
            "plant": "Black Gram (Urad dal)",
            "disease": "Root Rot",
            "symptoms": ["Affects roots, leading to stunting and poor growth"],
            "treatment": "Ensure proper drainage, avoid waterlogging, and treat soil with Captan or Carbendazim"
        },
        {
            "plant": "Black Gram (Urad dal)",
            "disease": "Cowpea Mosaic Virus",
            "symptoms": ["Mosaic patterns on leaves, stunted growth, and reduced yield"],
            "treatment": "Use virus-free seeds, control aphids with Imidacloprid, and remove and destroy infected plants"
        },
        {
            "plant": "Cowpea",
            "disease": "Cowpea Rust",
            "symptoms": ["Yellow to reddish-brown pustules on leaves, reducing photosynthesis"],
            "treatment": "Use resistant varieties and spray fungicides like Mancozeb or Propiconazole"
        },
        {
            "plant": "Cowpea",
            "disease": "Powdery Mildew",
            "symptoms": ["White powdery growth on leaves, leading to reduced growth and yield"],
            "treatment": "Apply sulfur-based fungicides or potassium bicarbonate and improve air circulation"
        },
        {
            "plant": "Cowpea",
            "disease": "Fusarium Wilt",
            "symptoms": ["Yellowing and wilting of plants, often leading to plant death"],
            "treatment": "Use disease-free seeds, resistant varieties, and drench soil with Trichoderma or Carbendazim"
        },
        {
            "plant": "Cowpea",
            "disease": "Bacterial Blight",
            "symptoms": ["Water-soaked lesions on leaves and stems, causing wilting and yield loss"],
            "treatment": "Remove infected plants, avoid overhead irrigation, and spray copper oxychloride or streptomycin sulfate"
        },
        {
            "plant": "Cowpea",
            "disease": "Root Rot",
            "symptoms": ["Affects roots, leading to stunting and poor growth"],
            "treatment": "Improve soil drainage, avoid overwatering, and treat soil with Carbendazim or Captan"
        },
        {
            "plant": "Cowpea",
            "disease": "Cowpea Mosaic Virus",
            "symptoms": ["Mosaic patterns on leaves, stunted growth, and reduced yield"],
            "treatment": "Use virus-free seeds, control aphids with Imidacloprid, and remove and destroy infected plants"
        },
        {
            "plant": "Groundnut (Peanut)",
            "disease": "Groundnut Rust (Puccinia arachidis)",
            "symptoms": [
                "Yellow spots on leaves",
                "Pustules on leaves"
            ],
            "treatment": "Use resistant varieties. Spray fungicides like Propiconazole or Tebuconazole."
        },
        {
            "plant": "Groundnut (Peanut)",
            "disease": "Early Leaf Spot (Cercospora arachidicola)",
            "symptoms": [
                "Lesions on leaves"
            ],
            "treatment": "Use resistant varieties and crop rotation. Apply fungicides like Chlorothalonil or Mancozeb."
        },
        {
            "plant": "Groundnut (Peanut)",
            "disease": "Tikka Disease (Cercospora personata)",
            "symptoms": [
                "Affects leaves and pods",
                "Premature drying"
            ],
            "treatment": "Remove infected plant debris. Spray fungicides like Carbendazim or Mancozeb."
        },
        {
            "plant": "Mustard",
            "disease": "White Rust (Albugo candida)",
            "symptoms": [
                "White pustules on leaves and stems"
            ],
            "treatment": "Use resistant varieties. Apply fungicides like Chlorothalonil or Mancozeb."
        },
        {
            "plant": "Mustard",
            "disease": "Sclerotinia Rot (Sclerotinia sclerotiorum)",
            "symptoms": [
                "Stem rot",
                "Root rot"
            ],
            "treatment": "Improve field drainage and avoid overwatering. Apply fungicides like Carbendazim or Fluazinam."
        },
        {
            "plant": "Mustard",
            "disease": "Downy Mildew (Peronospora parasitica)",
            "symptoms": [
                "Yellow patches on leaves"
            ],
            "treatment": "Use resistant varieties and ensure proper spacing. Spray systemic fungicides like Metalaxyl or Mancozeb."
        },
        {
            "plant": "Sunflower",
            "disease": "Sclerotinia Wilt (Sclerotinia sclerotiorum)",
            "symptoms": [
                "Wilting of stems and roots"
            ],
            "treatment": "Improve soil drainage and reduce irrigation. Apply fungicides like Carbendazim or Fluazinam."
        },
        {
            "plant": "Sunflower",
            "disease": "Downy Mildew (Plasmopara halstedii)",
            "symptoms": [
                "Yellowing of leaves",
                "Deformed growth"
            ],
            "treatment": "Use resistant varieties and crop rotation. Apply Metalaxyl or Mancozeb."
        },
        {
            "plant": "Sunflower",
            "disease": "Phomopsis Rot (Phomopsis helianthi)",
            "symptoms": [
                "Affects seeds and stems"
            ],
            "treatment": "Use disease-free seeds and remove infected debris. Apply fungicides like Thiophanate-methyl or Carbendazim."
        },
        {
            "plant": "Soya bean",
            "disease": "Soybean Rust (Phakopsora pachyrhizi)",
            "symptoms": [
                "Yellow spots and lesions on leaves"
            ],
            "treatment": "Use resistant varieties. Apply fungicides like Propiconazole or Tebuconazole."
        },
        {
            "plant": "Soya bean",
            "disease": "Fusarium Wilt (Fusarium oxysporum)",
            "symptoms": [
                "Yellowing of leaves",
                "Wilting of plants"
            ],
            "treatment": "Use resistant varieties and disease-free seeds. Drench soil with Trichoderma or Carbendazim."
        },
        {
            "plant": "Soya bean",
            "disease": "Anthracnose (Colletotrichum truncatum)",
            "symptoms": [
                "Dark, sunken lesions on stems, leaves, and pods"
            ],
            "treatment": "Use resistant varieties. Spray fungicides like Chlorothalonil or Mancozeb."
        },
        {
            "plant": "Sesame",
            "disease": "Leaf Spot (Cercospora sesami)",
            "symptoms": [
                "Circular brown lesions on leaves"
            ],
            "treatment": "Remove infected plant debris. Apply fungicides like Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Sesame",
            "disease": "Powdery Mildew (Erysiphe cichoracearum)",
            "symptoms": [
                "White powdery growth on leaves, stems, and flowers"
            ],
            "treatment": "Use Sulfur-based fungicides or Potassium bicarbonate. Improve air circulation."
        },
        {
            "plant": "Sesame",
            "disease": "Sclerotinia Wilt (Sclerotinia sclerotiorum)",
            "symptoms": [
                "Wilting and decay of stems and roots"
            ],
            "treatment": "Improve soil drainage and avoid overwatering. Apply fungicides like Carbendazim or Fluazinam."
        },
        {
            "plant": "Sesame",
            "disease": "Root Rot (Rhizoctonia solani)",
            "symptoms": [
                "Wilting",
                "Yellowing",
                "Poor growth"
            ],
            "treatment": "Ensure proper drainage and reduce overwatering. Treat soil with Carbendazim or Captan."
        },
        {
            "plant": "Sesame",
            "disease": "Bacterial Blight (Xanthomonas campestris)",
            "symptoms": [
                "Water-soaked lesions on leaves",
                "Yellowing"
            ],
            "treatment": "Remove infected plants and avoid overhead irrigation. Spray Copper oxychloride or Streptomycin sulfate."
        },
        {
            "plant": "Sesame",
            "disease": "Sesame Mosaic Virus (SeMV)",
            "symptoms": [
                "Mosaic patterns on leaves",
                "Stunted growth",
                "Reduced yield"
            ],
            "treatment": "Use virus-free seeds and control aphids (vectors) with Imidacloprid. Remove and destroy infected plants."
        },
        {
            "plant": "Castor",
            "disease": "Leaf Spot (Alternaria ricini)",
            "symptoms": [
                "Circular, dark lesions on leaves",
                "Premature leaf drop"
            ],
            "treatment": "Remove infected leaves and debris. Apply fungicides like Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Castor",
            "disease": "Cercospora Leaf Spot (Cercospora ricini)",
            "symptoms": [
                "Small, dark brown to black spots on leaves",
                "Reduced photosynthesis"
            ],
            "treatment": "Use resistant varieties and crop rotation. Apply fungicides such as Carbendazim or Mancozeb."
        },
        {
            "plant": "Castor",
            "disease": "Fusarium Wilt (Fusarium oxysporum)",
            "symptoms": [
                "Yellowing and wilting of leaves",
                "Plant death"
            ],
            "treatment": "Use resistant varieties and disease-free seeds. Drench soil with Trichoderma or Carbendazim."
        },
        {
            "plant": "Castor",
            "disease": "Root Rot (Rhizoctonia solani)",
            "symptoms": [
                "Root decay",
                "Wilting",
                "Stunting of plants"
            ],
            "treatment": "Ensure proper soil drainage and reduce overwatering. Treat soil with Carbendazim or Captan."
        },
        {
            "plant": "Castor",
            "disease": "Bacterial Blight (Xanthomonas campestris)",
            "symptoms": [
                "Water-soaked lesions on leaves and stems",
                "Wilting and reduced yield"
            ],
            "treatment": "Remove infected plants and avoid overhead irrigation. Spray Copper oxychloride or Streptomycin sulfate."
        },
        {
            "plant": "Castor",
            "disease": "Castor Bean Mosaic Virus (CBMV)",
            "symptoms": [
                "Mosaic patterns on leaves",
                "Stunting",
                "Reduced seed yield"
            ],
            "treatment": "Use virus-free seeds and control aphids (vectors) with Imidacloprid. Remove and destroy infected plants."
        },
        {
            "plant": "Mango",
            "disease": "Anthracnose (Colletotrichum gloeosporioides)",
            "symptoms": [
                "Black spots on fruits and flowers"
            ],
            "treatment": "Remove infected plant parts. Spray fungicides like Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Mango",
            "disease": "Powdery Mildew (Oidium mangiferae)",
            "symptoms": [
                "White powdery coating on leaves, flowers, and fruits"
            ],
            "treatment": "Apply Sulfur-based fungicides or Potassium bicarbonate. Improve air circulation to reduce humidity."
        },
        {
            "plant": "Mango",
            "disease": "Mango Malformation",
            "symptoms": [
                "Abnormal growth of flowers and shoots due to fungal or viral infections"
            ],
            "treatment": "Prune and remove affected parts. Apply fungicides like Carbendazim or Maneb, or use plant growth regulators for control."
        },
        {
            "plant": "Banana",
            "disease": "Black Sigatoka (Mycosphaerella fijiensis)",
            "symptoms": [
                "Black streaks on leaves"
            ],
            "treatment": "Use resistant banana varieties. Apply fungicides like Mancozeb or Propiconazole."
        },
        {
            "plant": "Banana",
            "disease": "Panama Disease (Fusarium oxysporum)",
            "symptoms": [
                "Wilting and yellowing of plants"
            ],
            "treatment": "Use resistant varieties and disease-free planting material. Drench soil with Trichoderma or Carbendazim."
        },
        {
            "plant": "Banana",
            "disease": "Bacterial Wilt (Pseudomonas solanacearum)",
            "symptoms": [
                "Yellowing and wilting of plants"
            ],
            "treatment": "Remove infected plants and avoid waterlogging. Apply Copper-based bactericides or use resistant varieties."
        },
        {
            "plant": "Papaya",
            "disease": "Papaya Ring Spot Virus (PRSV)",
            "symptoms": [
                "Yellowing and deformed leaves",
                "Stunted growth",
                "Reduced fruit yield"
            ],
            "treatment": "Use virus-free seeds and control aphids. Remove infected plants."
        },
        {
            "plant": "Papaya",
            "disease": "Powdery Mildew (Oidium caricae)",
            "symptoms": [
                "White, powdery coating on leaves",
                "Reduced plant vigor and fruit quality"
            ],
            "treatment": "Apply Sulfur-based fungicides. Improve air circulation."
        },
        {
            "plant": "Papaya",
            "disease": "Anthracnose (Colletotrichum gloeosporioides)",
            "symptoms": [
                "Dark, sunken lesions on fruits and leaves",
                "Premature fruit drop"
            ],
            "treatment": "Remove infected parts. Use Mancozeb or Chlorothalonil fungicides."
        },
        {
            "plant": "Papaya",
            "disease": "Bacterial Blight (Xanthomonas campestris)",
            "symptoms": [
                "Water-soaked lesions on leaves and stems",
                "Wilting and dieback"
            ],
            "treatment": "Remove infected plants. Apply Copper oxychloride or Streptomycin."
        },
        {
            "plant": "Papaya",
            "disease": "Phytophthora Blight (Phytophthora palmivora)",
            "symptoms": [
                "Root rot and stem lesions",
                "Wilting and plant death"
            ],
            "treatment": "Improve drainage. Apply Metalaxyl or Phosphorous acid."
        },
        {
            "plant": "Papaya",
            "disease": "Black Spot (Asperisporium caricae)",
            "symptoms": [
                "Dark spots on leaves and fruits",
                "Affecting growth and yield"
            ],
            "treatment": "Prune affected parts. Use Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Apple",
            "disease": "Apple Scab (Venturia inaequalis)",
            "symptoms": [
                "Olive-green to black lesions on leaves, fruits, and stems",
                "Affecting fruit quality and yield"
            ],
            "treatment": "Apply fungicides like Myclobutanil or Mancozeb. Remove and destroy infected leaves and fruit."
        },
        {
            "plant": "Apple",
            "disease": "Powdery Mildew (Podosphaera leucotricha)",
            "symptoms": [
                "White, powdery growth on leaves, shoots, and buds",
                "Stunting growth and reducing yield"
            ],
            "treatment": "Use Sulfur-based fungicides or Potassium bicarbonate. Prune infected parts and improve air circulation."
        },
        {
            "plant": "Apple",
            "disease": "Fire Blight (Erwinia amylovora)",
            "symptoms": [
                "Blackened, wilted branches and flowers",
                "Causing dieback and plant death"
            ],
            "treatment": "Prune infected branches and disinfect tools. Apply Streptomycin or Copper-based bactericides."
        },
        {
            "plant": "Apple",
            "disease": "Apple Canker (Neonectria ditissima)",
            "symptoms": [
                "Sunken, dark lesions on branches and trunks",
                "Causing dieback"
            ],
            "treatment": "Prune and remove infected wood. Apply fungicides like Thiophanate-methyl or Copper-based treatments."
        },
        {
            "plant": "Apple",
            "disease": "Root Rot (Phytophthora spp.)",
            "symptoms": [
                "Rotting of roots",
                "Wilting and poor plant growth due to fungal infection"
            ],
            "treatment": "Improve soil drainage and avoid waterlogging. Apply fungicides like Metalaxyl or Phosphorous acid."
        },
        {
            "plant": "Apple",
            "disease": "Brown Rot (Monilinia fructicola)",
            "symptoms": [
                "Soft, rotting fruit with brown lesions",
                "Leading to fruit drop"
            ],
            "treatment": "Remove and destroy affected fruit. Apply fungicides like Thiophanate-methyl or Carbendazim."
        },
        {
            "plant": "Pineapple",
            "disease": "Pineapple Heart Rot (Sphaeropsis sapinea)",
            "symptoms": [
                "Soft, water-soaked areas in the heart of the plant",
                "Leading to plant death"
            ],
            "treatment": "Remove and destroy infected plants. Apply fungicides like Thiophanate-methyl or Copper-based treatments."
        },
        {
            "plant": "Pineapple",
            "disease": "Pineapple Yellowing (Spiraling Whitefly)",
            "symptoms": [
                "Yellowing of leaves due to whitefly feeding",
                "Transmission of viruses"
            ],
            "treatment": "Control whiteflies using insecticides like Imidacloprid. Use yellow sticky traps to reduce fly population."
        },
        {
            "plant": "Pineapple",
            "disease": "Fusarium Wilt (Fusarium oxysporum)",
            "symptoms": [
                "Yellowing and wilting of older leaves",
                "Stunted growth and potential plant death"
            ],
            "treatment": "Use resistant varieties and crop rotation. Drench soil with Trichoderma or Carbendazim."
        },
        {
            "plant": "Pineapple",
            "disease": "Pineapple Leaf Spot (Colletotrichum gloeosporioides)",
            "symptoms": [
                "Circular lesions with brown borders on leaves",
                "Reducing plant vigor"
            ],
            "treatment": "Remove infected leaves. Apply fungicides like Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Pineapple",
            "disease": "Phytophthora Root Rot (Phytophthora cinnamomi)",
            "symptoms": [
                "Root damage causing poor plant growth",
                "Wilting and yellowing"
            ],
            "treatment": "Improve soil drainage. Apply fungicides like Metalaxyl or Phosphorous acid."
        },
        {
            "plant": "Pineapple",
            "disease": "Bacterial Soft Rot (Erwinia carotovora)",
            "symptoms": [
                "Soft, decayed spots on fruit",
                "Leading to rotting and spoilage"
            ],
            "treatment": "Remove infected fruit and improve hygiene. Apply Copper-based bactericides."
        },
        {
            "plant": "Guava",
            "disease": "Guava Wilt (Fusarium oxysporum)",
            "symptoms": [
                "Yellowing, wilting, and sudden death of trees",
                "Often leading to plant mortality"
            ],
            "treatment": "Remove infected trees and practice crop rotation. Apply fungicides like Carbendazim or Trichoderma."
        },
        {
            "plant": "Guava",
            "disease": "Guava Rust (Puccinia psidii)",
            "symptoms": [
                "Rust-colored spots on leaves",
                "Leading to defoliation and reduced yield"
            ],
            "treatment": "Prune affected parts and improve air circulation. Apply fungicides like Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Guava",
            "disease": "Anthracnose (Colletotrichum gloeosporioides)",
            "symptoms": [
                "Dark lesions on fruits and branches",
                "Causing fruit rot and poor quality"
            ],
            "treatment": "Remove infected fruits and branches. Apply fungicides like Mancozeb or Copper-based treatments."
        },
        {
            "plant": "Guava",
            "disease": "Bacterial Canker (Xanthomonas campestris)",
            "symptoms": [
                "Water-soaked lesions on leaves, twigs, and fruits",
                "Causing wilting and reduced growth"
            ],
            "treatment": "Prune and disinfect tools. Apply Copper-based bactericides."
        },
        {
            "plant": "Guava",
            "disease": "Powdery Mildew (Oidium guajavae)",
            "symptoms": [
                "White, powdery growth on leaves",
                "Reducing photosynthesis and fruit production"
            ],
            "treatment": "Apply Sulfur-based fungicides or Potassium bicarbonate. Prune and improve ventilation."
        },
        {
            "plant": "Guava",
            "disease": "Leaf Spot (Cercospora psidii)",
            "symptoms": [
                "Dark, angular spots on leaves",
                "Causing premature leaf drop"
            ],
            "treatment": "Remove and destroy infected leaves. Apply fungicides like Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Grapes",
            "disease": "Downy Mildew (Plasmopara viticola)",
            "symptoms": [
                "Yellowish lesions on leaves",
                "White mold on the underside",
                "Decay of fruits"
            ],
            "treatment": "Apply fungicides like Metalaxyl or Fosetyl-Al. Remove infected leaves and improve air circulation."
        },
        {
            "plant": "Grapes",
            "disease": "Powdery Mildew (Erysiphe necator)",
            "symptoms": [
                "White powdery growth on leaves, stems, and grapes",
                "Reduced fruit quality"
            ],
            "treatment": "Use Sulfur-based fungicides or Potassium bicarbonate. Prune for better air circulation."
        },
        {
            "plant": "Grapes",
            "disease": "Anthracnose (Colletotrichum spp.)",
            "symptoms": [
                "Dark sunken lesions on berries",
                "Causing premature fruit drop"
            ],
            "treatment": "Remove infected fruit and plant debris. Apply fungicides like Mancozeb or Copper-based treatments."
        },
        {
            "plant": "Grapes",
            "disease": "Black Rot (Guignardia bidwellii)",
            "symptoms": [
                "Dark, round lesions on fruit",
                "Causing rot and decreased yield"
            ],
            "treatment": "Remove and destroy infected fruit. Apply fungicides like Myclobutanil or Mancozeb."
        },
        {
            "plant": "Grapes",
            "disease": "Grape Leafroll Virus (GLRV)",
            "symptoms": [
                "Yellowing, downward rolling of leaves",
                "Stunted growth",
                "Reduced grape quality"
            ],
            "treatment": "Remove infected vines and control aphids (vectors). Use certified virus-free planting material."
        },
        {
            "plant": "Grapes",
            "disease": "Phomopsis Cane and Leaf Spot (Phomopsis viticola)",
            "symptoms": [
                "Dark lesions on leaves and stems",
                "Weakening of the plant and reduced fruit yield"
            ],
            "treatment": "Remove infected leaves and canes. Apply fungicides like Thiophanate-methyl or Mancozeb."
        },
        {
            "plant": "Grapes",
            "disease": "Botrytis Bunch Rot (Botrytis cinerea)",
            "symptoms": [
                "Gray mold on grapes, especially under humid conditions",
                "Causing fruit rot"
            ],
            "treatment": "Improve air circulation and reduce humidity. Apply fungicides like Botrytis-specific ones or Thiophanate-methyl."
        },
        {
            "plant": "Citrus (Oranges, Lemons, Limes)",
            "disease": "Citrus Canker (Xanthomonas axonopodis)",
            "symptoms": [
                "Bacterial infection causing lesions on leaves and fruit"
            ],
            "treatment": "Remove and destroy infected plant parts. Apply Copper-based bactericides."
        },
        {
            "plant": "Citrus (Oranges, Lemons, Limes)",
            "disease": "Gummosis (Phytophthora species)",
            "symptoms": [
                "Fungal infection affecting roots and causing gumming"
            ],
            "treatment": "Improve drainage and avoid overwatering. Apply fungicides like Metalaxyl or Phosphorous acid."
        },
        {
            "plant": "Citrus (Oranges, Lemons, Limes)",
            "disease": "Citrus Greening (Huanglongbing)",
            "symptoms": [
                "Bacterial disease that affects the tree's vascular system"
            ],
            "treatment": "Remove and destroy infected trees. Control insect vectors (e.g., aphids) with insecticides."
        },
        {
            "plant": "Pomegranate",
            "disease": "Wilt Disease (Fusarium oxysporum)",
            "symptoms": [
                "Affects roots and causes wilting"
            ],
            "treatment": "Use resistant varieties and crop rotation. Apply fungicides like Carbendazim or Trichoderma."
        },
        {
            "plant": "Pomegranate",
            "disease": "Bacterial Blight (Xanthomonas axonopodis)",
            "symptoms": [
                "Causes wilting and yellowing of leaves"
            ],
            "treatment": "Remove infected plant parts. Apply Copper-based bactericides."
        },
        {
            "plant": "Pomegranate",
            "disease": "Anthracnose (Colletotrichum gloeosporioides)",
            "symptoms": [
                "Affects fruits, causing dark lesions"
            ],
            "treatment": "Remove affected fruit and plant parts. Apply fungicides like Mancozeb or Copper-based treatments."
        },
        {
            "plant": "Coconut",
            "disease": "Coconut Leaf Wilt Disease (Lethal Yellowing)",
            "symptoms": [
                "Yellowing of leaves",
                "Premature fruit drop",
                "Tree death"
            ],
            "treatment": "Remove and destroy infected trees. Apply Copper-based bactericides to healthy trees."
        },
        {
            "plant": "Coconut",
            "disease": "Coconut Bud Rot (Phytophthora palmivora)",
            "symptoms": [
                "Rotting of the growing bud",
                "Stunted growth and tree death"
            ],
            "treatment": "Improve drainage and avoid overwatering. Apply fungicides like Metalaxyl or Phosphorous acid."
        },
        {
            "plant": "Coconut",
            "disease": "Coconut Root Wilt Disease (Rhizoctonia solani)",
            "symptoms": [
                "Yellowing and wilting of leaves",
                "Poor fruiting and death of roots"
            ],
            "treatment": "Improve soil drainage and reduce water stress. Apply fungicides like Carbendazim or Trichoderma."
        },
        {
            "plant": "Coconut",
            "disease": "Coconut Leaf Blight (Pestalotiopsis palmarum)",
            "symptoms": [
                "Brown to black spots on leaves",
                "Defoliation"
            ],
            "treatment": "Prune affected leaves and improve air circulation. Apply fungicides like Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Coconut",
            "disease": "Coconut Rhinoceros Beetle Damage",
            "symptoms": [
                "Feeding on the heart of the tree",
                "Injury to the crown and weakening of the tree"
            ],
            "treatment": "Use pheromone traps to reduce beetle population. Apply insecticides and remove damaged crown parts."
        },
        {
            "plant": "Coconut",
            "disease": "Red Palm Weevil Damage",
            "symptoms": [
                "Feeding on the trunk",
                "Internal damage and tree collapse"
            ],
            "treatment": "Use pheromone traps for early detection. Apply insecticides like Imidacloprid."
        },
        {
            "plant": "Coconut",
            "disease": "Coconut Mosaic Virus",
            "symptoms": [
                "Mottling, yellowing, and stunted growth",
                "Affecting fruit production"
            ],
            "treatment": "Remove infected trees and control insect vectors. Use virus-free planting material."
        },
        {
            "plant": "Potato",
            "disease": "Late Blight (Phytophthora infestans)",
            "symptoms": [
                "Fungal disease causing lesions on leaves and tubers"
            ],
            "treatment": "Apply fungicides like Metalaxyl or Mancozeb. Remove infected leaves and tubers."
        },
        {
            "plant": "Potato",
            "disease": "Early Blight (Alternaria solani)",
            "symptoms": [
                "Dark, concentric rings on leaves"
            ],
            "treatment": "Apply fungicides like Chlorothalonil or Mancozeb. Practice crop rotation and remove infected debris."
        },
        {
            "plant": "Potato",
            "disease": "Black Scab (Streptomyces scabies)",
            "symptoms": [
                "Dark, rough patches on tubers"
            ],
            "treatment": "Apply fungicides like Terrachlor. Improve soil drainage and use resistant potato varieties."
        },
        {
            "plant": "Tomato",
            "disease": "Tomato Leaf Curl Virus (TLCV)",
            "symptoms": [
                "Curling and yellowing of leaves"
            ],
            "treatment": "Remove and destroy infected plants. Control aphid vectors with insecticides."
        },
        {
            "plant": "Tomato",
            "disease": "Early Blight (Alternaria solani)",
            "symptoms": [
                "Fungal disease causing leaf lesions"
            ],
            "treatment": "Apply fungicides like Chlorothalonil or Mancozeb. Practice crop rotation and remove infected leaves."
        },
        {
            "plant": "Tomato",
            "disease": "Bacterial Wilt (Ralstonia solanacearum)",
            "symptoms": [
                "Wilting and yellowing of leaves"
            ],
            "treatment": "Remove and destroy infected plants. Use resistant tomato varieties and practice proper irrigation management."
        },
        {
            "plant": "Onion",
            "disease": "Downy Mildew (Peronospora destructor)",
            "symptoms": [
                "Yellowing and wilting of leaves"
            ],
            "treatment": "Apply fungicides like Metalaxyl or Mancozeb. Remove infected leaves and improve air circulation."
        },
        {
            "plant": "Onion",
            "disease": "White Rot (Sclerotium cepivorum)",
            "symptoms": [
                "Fungal infection causing root rot and plant death"
            ],
            "treatment": "Practice crop rotation and avoid planting in infected soil. Apply fungicides like Chlorothalonil or use resistant onion varieties."
        },
        {
            "plant": "Onion",
            "disease": "Neck Rot (Botrytis allii)",
            "symptoms": [
                "Affects the neck and bulb of the onion"
            ],
            "treatment": "Remove and destroy infected plants. Apply fungicides like Mancozeb or Thiophanate-methyl."
        },
        {
            "plant": "Cauliflower",
            "disease": "Downy Mildew",
            "symptoms": [
                "Yellowing and stunted growth due to fungal infection"
            ],
            "treatment": "Apply fungicides like Metalaxyl or Mancozeb. Remove infected leaves and improve airflow."
        },
        {
            "plant": "Cauliflower",
            "disease": "Black Rot",
            "symptoms": [
                "Yellowing and black lesions from bacterial infection"
            ],
            "treatment": "Remove and destroy infected plants. Use Copper-based bactericides and practice crop rotation."
        },
        {
            "plant": "Cauliflower",
            "disease": "Clubroot",
            "symptoms": [
                "Root swelling and stunting caused by soil fungus"
            ],
            "treatment": "Use resistant cabbage varieties. Apply lime to raise soil pH and improve drainage."
        },
        {
            "plant": "Cabbage",
            "disease": "Downy Mildew",
            "symptoms": [
                "Yellowing of leaves",
                "White, powdery growth on the underside of leaves"
            ],
            "treatment": "Apply fungicides like Metalaxyl or Mancozeb. Remove infected leaves and improve airflow."
        },
        {
            "plant": "Cabbage",
            "disease": "Clubroot",
            "symptoms": [
                "Swelling and distortion of the roots, reducing water and nutrient uptake"
            ],
            "treatment": "Use resistant varieties. Apply lime to raise soil pH and improve drainage."
        },
        {
            "plant": "Cabbage",
            "disease": "Black Rot",
            "symptoms": [
                "Yellowing and wilting of leaves",
                "Black veins"
            ],
            "treatment": "Remove infected plants. Use Copper-based bactericides and practice crop rotation."
        },
        {
            "plant": "Brinjal (Eggplant)",
            "disease": "Early Blight",
            "symptoms": [
                "Dark, concentric rings on leaves and stems",
                "Leading to defoliation"
            ],
            "treatment": "Apply fungicides like Chlorothalonil. Practice crop rotation and remove infected leaves."
        },
        {
            "plant": "Brinjal (Eggplant)",
            "disease": "Late Blight",
            "symptoms": [
                "Water-soaked lesions on leaves",
                "Rapid decay"
            ],
            "treatment": "Use fungicides like Mancozeb or Copper sulfate. Remove and destroy infected plants."
        },
        {
            "plant": "Brinjal (Eggplant)",
            "disease": "Bacterial Wilt",
            "symptoms": [
                "Wilting, yellowing, and eventual death of plants"
            ],
            "treatment": "Remove infected plants. Use resistant varieties and practice crop rotation."
        },
        {
            "plant": "Spinach",
            "disease": "Downy Mildew",
            "symptoms": [
                "Yellowing, white mold on the underside of leaves",
                "Stunted growth"
            ],
            "treatment": "Apply fungicides like Metalaxyl or Copper-based products. Improve air circulation and avoid overhead irrigation."
        },
        {
            "plant": "Spinach",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery spots on leaves",
                "Reducing plant vigor"
            ],
            "treatment": "Use sulfur-based fungicides or Potassium bicarbonate. Remove infected parts and improve airflow."
        },
        {
            "plant": "Pumpkin",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery spots on leaves",
                "Reduced photosynthesis and plant vigor"
            ],
            "treatment": "Apply sulfur-based fungicides or Potassium bicarbonate. Increase airflow and remove infected parts."
        },
        {
            "plant": "Pumpkin",
            "disease": "Downy Mildew",
            "symptoms": [
                "Yellow spots on leaves",
                "Grayish mold on the undersides"
            ],
            "treatment": "Apply fungicides like Metalaxyl or copper-based products. Improve air circulation and avoid overhead irrigation."
        },
        {
            "plant": "Pumpkin",
            "disease": "Cucurbit Wilt (Fusarium Wilt)",
            "symptoms": [
                "Yellowing, wilting, and death of plants",
                "Starting from the roots"
            ],
            "treatment": "Use resistant varieties and rotate crops. Avoid excessive watering and improve soil health."
        },
        {
            "plant": "Pumpkin",
            "disease": "Anthracnose",
            "symptoms": [
                "Dark, sunken lesions on fruit, stems, and leaves"
            ],
            "treatment": "Remove infected parts and apply fungicides like Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Pumpkin",
            "disease": "Bacterial Wilt",
            "symptoms": [
                "Rapid wilting and death of vines",
                "Transmitted by cucumber beetles"
            ],
            "treatment": "Remove infected plants and control cucumber beetles. Use copper-based bactericides."
        },
        {
            "plant": "Pumpkin",
            "disease": "Cercospora Leaf Spot",
            "symptoms": [
                "Small, circular lesions with light-colored centers on leaves"
            ],
            "treatment": "Apply fungicides like Mancozeb or Chlorothalonil. Prune affected leaves and improve spacing."
        },
        {
            "plant": "Pumpkin",
            "disease": "Septoria Leaf Spot",
            "symptoms": [
                "Small, circular spots with dark borders on leaves"
            ],
            "treatment": "Use fungicides like Chlorothalonil or Copper-based products. Remove infected leaves."
        },
        {
            "plant": "Pumpkin",
            "disease": "Root Rot",
            "symptoms": [
                "Rotting of roots",
                "Stunted plant growth"
            ],
            "treatment": "Improve soil drainage and avoid overwatering. Use fungicides like Metalaxyl."
        },
        {
            "plant": "Pumpkin",
            "disease": "Pumpkin Mosaic Virus",
            "symptoms": [
                "Mosaic patterns",
                "Yellowing and stunting of plants"
            ],
            "treatment": "Use virus-free seeds. Control aphid populations and remove infected plants."
        },
        {
            "plant": "Pumpkin",
            "disease": "Gummy Stem Blight",
            "symptoms": [
                "Lesions, wilting, and gummy exudates on stems"
            ],
            "treatment": "Apply fungicides like Chlorothalonil or Mancozeb. Remove infected stems and improve air circulation."
        },
        {
            "plant": "Cotton",
            "disease": "Cotton Root Rot",
            "symptoms": [
                "Fungal disease causing wilting and root decay"
            ],
            "treatment": "Improve soil drainage and avoid overwatering. Apply fungicides like Ridomil or Actinovate."
        },
        {
            "plant": "Cotton",
            "disease": "Cotton Leaf Curl Virus",
            "symptoms": [
                "Curling and yellowing of leaves"
            ],
            "treatment": "Use resistant varieties. Control whiteflies and aphids (vectors). Remove infected plants."
        },
        {
            "plant": "Cotton",
            "disease": "Bacterial Blight",
            "symptoms": [
                "Lesions on leaves and stems"
            ],
            "treatment": "Use copper-based bactericides. Remove infected plant parts and practice crop rotation."
        },
        {
            "plant": "Tobacco",
            "disease": "Tobacco Mosaic Virus",
            "symptoms": [
                "Mottling and discoloration of leaves"
            ],
            "treatment": "Use virus-free seeds and resistant varieties. Remove and destroy infected plants. Control vectors (e.g., aphids)."
        },
        {
            "plant": "Tobacco",
            "disease": "Black Shank",
            "symptoms": [
                "Wilting and decay of roots and stems"
            ],
            "treatment": "Improve drainage and reduce soil compaction. Apply fungicides like Mefenoxam or Metalaxyl. Practice crop rotation."
        },
        {
            "plant": "Tobacco",
            "disease": "Fusarium Wilt",
            "symptoms": [
                "Yellowing and wilting of plants"
            ],
            "treatment": "Use resistant varieties. Avoid overwatering and improve soil drainage. Remove infected plants to reduce spread."
        },
        {
            "plant": "Coffee",
            "disease": "Coffee Leaf Rust",
            "symptoms": [
                "Yellow spots and leaf drop"
            ],
            "treatment": "Apply fungicides like copper-based or triazole fungicides. Prune affected leaves and improve air circulation. Use resistant coffee varieties."
        },
        {
            "plant": "Coffee",
            "disease": "Coffee Berry Disease",
            "symptoms": [
                "Lesions and decay of coffee berries"
            ],
            "treatment": "Remove and destroy infected berries and branches. Apply fungicides like Chlorothalonil. Practice proper spacing and good field hygiene."
        },
        {
            "plant": "Coffee",
            "disease": "Root Rot",
            "symptoms": [
                "Root damage affecting plant growth"
            ],
            "treatment": "Improve soil drainage and avoid overwatering. Apply fungicides like Metalaxyl. Use resistant rootstock or root barriers."
        },
        {
            "plant": "Sugarcane",
            "disease": "Red Rot",
            "symptoms": [
                "Internal decay of sugarcane stalks"
            ],
            "treatment": "Remove and destroy infected stalks. Apply fungicides like Carbendazim. Use resistant sugarcane varieties."
        },
        {
            "plant": "Sugarcane",
            "disease": "Sugarcane Mosaic Virus",
            "symptoms": [
                "Yellowing and stunted growth"
            ],
            "treatment": "Use virus-free planting material. Remove and destroy infected plants. Control aphids, the vector for the virus."
        },
        {
            "plant": "Sugarcane",
            "disease": "Top Shoot Borer",
            "symptoms": [
                "Damage to growing points",
                "Stunted growth"
            ],
            "treatment": "Apply insecticides like Chlorpyrifos or Deltamethrin. Use biological control agents like Trichogramma. Remove infested shoots regularly."
        },
        {
            "plant": "Tea",
            "disease": "Tea Leaf Disease",
            "symptoms": [
                "Fungal infection causing leaf spots",
                "Reduced yield"
            ],
            "treatment": "Apply fungicides like Mancozeb or Copper-based fungicides. Remove and destroy infected leaves."
        },
        {
            "plant": "Tea",
            "disease": "Root Knot Nematode",
            "symptoms": [
                "Parasitic nematodes causing root galls",
                "Stunting growth"
            ],
            "treatment": "Use nematicides like Carbofuran or Aldicarb. Incorporate organic matter and use resistant tea varieties."
        },
        {
            "plant": "Tea",
            "disease": "Blister Blight",
            "symptoms": [
                "Blister-like spots on tea leaves"
            ],
            "treatment": "Spray fungicides like Copper oxychloride or Mancozeb. Remove affected leaves and improve air circulation."
        },
        {
            "plant": "Rubber",
            "disease": "South American Leaf Blight",
            "symptoms": [
                "Leaf lesions, defoliation, and reduced latex production"
            ],
            "treatment": "Apply fungicides like Mancozeb or Copper-based fungicides. Remove infected leaves and avoid overwatering."
        },
        {
            "plant": "Rubber",
            "disease": "White Root Disease",
            "symptoms": [
                "Root decay leading to plant wilting and death"
            ],
            "treatment": "Use fungicides like Trichoderma-based treatments. Improve soil drainage and avoid waterlogging."
        },
        {
            "plant": "Rubber",
            "disease": "Black Stripe Disease",
            "symptoms": [
                "Black streaks and decay in the rubber tree bark",
                "Affecting latex flow"
            ],
            "treatment": "Use bactericides like Copper-based products. Prune infected parts and avoid injury to trees."
        },
        {
            "plant": "Rubber",
            "disease": "Leaf Spot Disease",
            "symptoms": [
                "Dark spots on leaves",
                "Defoliation and reduced productivity"
            ],
            "treatment": "Apply fungicides like Mancozeb or Copper-based fungicides. Remove affected leaves and maintain proper spacing."
        },
        {
            "plant": "Rubber",
            "disease": "Corynespora Leaf Fall",
            "symptoms": [
                "Premature leaf drop",
                "Affecting tree health and latex yield"
            ],
            "treatment": "Apply fungicides like Mancozeb or Chlorothalonil. Prune affected branches and improve tree care."
        },
        {
            "plant": "Black Pepper",
            "disease": "Phytophthora Foot Rot",
            "symptoms": [
                "Root rot and wilting of the plant"
            ],
            "treatment": "Apply fungicides like Metalaxyl or Fosetyl-Al. Improve soil drainage and avoid overwatering."
        },
        {
            "plant": "Black Pepper",
            "disease": "Pepper Wilt",
            "symptoms": [
                "Fungal infection causing wilting and yellowing of leaves"
            ],
            "treatment": "Use resistant varieties and apply fungicides like Thiophanate-methyl. Remove and destroy infected plants."
        },
        {
            "plant": "Black Pepper",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery spots on leaves"
            ],
            "treatment": "Apply Sulfur-based fungicides or Potassium bicarbonate. Improve air circulation and remove infected leaves."
        },
        {
            "plant": "Ginger",
            "disease": "Rhizome Rot",
            "symptoms": [
                "Rotting of rhizomes",
                "Reducing yield"
            ],
            "treatment": "Apply fungicides like Thiabendazole or Copper-based treatments. Improve drainage and avoid waterlogging."
        },
        {
            "plant": "Ginger",
            "disease": "Leaf Spot",
            "symptoms": [
                "Brown, circular spots on leaves",
                "Affecting photosynthesis"
            ],
            "treatment": "Remove infected leaves and apply fungicides like Mancozeb or Chlorothalonil. Ensure proper spacing for air circulation."
        },
        {
            "plant": "Ginger",
            "disease": "Yellowing of Leaves (Fusarium Wilt)",
            "symptoms": [
                "Yellowing and wilting of leaves"
            ],
            "treatment": "Remove and destroy infected plants. Apply fungicides like Carbendazim or use resistant varieties."
        },
        {
            "plant": "Turmeric",
            "disease": "Soft Rot",
            "symptoms": [
                "Rotting of rhizomes caused by bacteria"
            ],
            "treatment": "Use bactericides like Copper-based products. Improve drainage and avoid overwatering."
        },
        {
            "plant": "Turmeric",
            "disease": "Leaf Spot",
            "symptoms": [
                "Lesions on leaves",
                "Affecting plant growth"
            ],
            "treatment": "Apply fungicides like Mancozeb or Copper-based sprays. Remove infected leaves to prevent spread."
        },
        {
            "plant": "Turmeric",
            "disease": "Cercospora Leaf Spot",
            "symptoms": [
                "Circular spots on leaves",
                "Reduced plant health"
            ],
            "treatment": "Apply fungicides like Chlorothalonil or Copper oxychloride. Remove infected leaves and avoid overhead irrigation."
        },
        {
            "plant": "Cardamom",
            "disease": "Cardamom Mosaic Virus",
            "symptoms": [
                "Yellowing and stunting of plants"
            ],
            "treatment": "Remove and destroy infected plants. Control insect vectors like aphids."
        },
        {
            "plant": "Cardamom",
            "disease": "Leaf Spot",
            "symptoms": [
                "Spots on leaves",
                "Reduced growth"
            ],
            "treatment": "Apply fungicides like Copper-based products or Mancozeb. Remove affected leaves to prevent spread."
        },
        {
            "plant": "Cardamom",
            "disease": "Root Rot",
            "symptoms": [
                "Rotting of the roots",
                "Plant wilting"
            ],
            "treatment": "Improve drainage and avoid overwatering. Use fungicides like Metalaxyl or Phosphorous acid for root treatment."
        },
        {
            "plant": "Coriander",
            "disease": "Downy Mildew",
            "symptoms": [
                "Yellowing and white mold on leaves"
            ],
            "treatment": "Apply fungicides like metalaxyl or phosphorous acid. Improve air circulation and avoid overhead irrigation."
        },
        {
            "plant": "Coriander",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery growth on leaves"
            ],
            "treatment": "Use sulfur-based fungicides or potassium bicarbonate. Remove infected leaves to reduce spread."
        },
        {
            "plant": "Coriander",
            "disease": "Cercospora Leaf Spot",
            "symptoms": [
                "Dark lesions on leaves, reducing yield"
            ],
            "treatment": "Apply copper-based fungicides or mancozeb. Remove affected leaves to limit disease spread."
        },
        {
            "plant": "Chili",
            "disease": "Bacterial Wilt",
            "symptoms": [
                "Wilting, yellowing, and death of the plant, often starting from the roots"
            ],
            "treatment": "Remove and destroy infected plants. Use resistant varieties and manage irrigation to avoid waterlogging."
        },
        {
            "plant": "Chili",
            "disease": "Anthracnose",
            "symptoms": [
                "Dark, sunken lesions on fruits, stems, and leaves, leading to rotting"
            ],
            "treatment": "Remove infected plant parts. Apply fungicides like Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Chili",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery spots on leaves and stems, reducing plant vigor"
            ],
            "treatment": "Use sulfur-based fungicides or potassium bicarbonate. Improve air circulation and avoid overhead watering."
        },
        {
            "plant": "Chili",
            "disease": "Fusarium Wilt",
            "symptoms": [
                "Yellowing and wilting of leaves, often starting from the older leaves"
            ],
            "treatment": "Remove infected plants and practice crop rotation. Use resistant varieties and improve soil drainage."
        },
        {
            "plant": "Chili",
            "disease": "Leaf Spot",
            "symptoms": [
                "Dark spots with yellow halos on leaves, leading to defoliation"
            ],
            "treatment": "Apply copper-based fungicides or Mancozeb. Prune affected areas and remove fallen leaves."
        },
        {
            "plant": "Cloves",
            "disease": "Clove Rust",
            "symptoms": [
                "Rust-colored spots on leaves, affecting photosynthesis and growth"
            ],
            "treatment": "Remove and destroy affected plant parts. Apply fungicides like Mancozeb or copper-based fungicides."
        },
        {
            "plant": "Cloves",
            "disease": "Wilt Disease",
            "symptoms": [
                "Wilting, yellowing, and eventual death of the plant"
            ],
            "treatment": "Remove infected plants and practice crop rotation. Improve soil drainage and use resistant varieties."
        },
        {
            "plant": "Cloves",
            "disease": "Phytophthora Root Rot",
            "symptoms": [
                "Root rot, leading to poor plant growth and yellowing of leaves"
            ],
            "treatment": "Improve soil drainage and avoid overwatering. Use fungicides like Metalaxyl or Phosphorous acid."
        },
        {
            "plant": "Cloves",
            "disease": "Corynespora Leaf Spot",
            "symptoms": [
                "Circular, dark spots on leaves, reducing plant health"
            ],
            "treatment": "Prune and remove infected leaves. Apply fungicides like Mancozeb or Chlorothalonil."
        },
        {
            "plant": "Marigold",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery growth on leaves, reducing plant vigor"
            ],
            "treatment": "Remove infected plant parts. Use fungicides like Sulfur or Potassium Bicarbonate."
        },
        {
            "plant": "Marigold",
            "disease": "Botrytis Blight",
            "symptoms": [
                "Gray mold on leaves, stems, and flowers, leading to plant decay"
            ],
            "treatment": "Remove and dispose of infected plant material. Apply fungicides like Triflumizole or Thiophanate-methyl."
        },
        {
            "plant": "Marigold",
            "disease": "Root Rot",
            "symptoms": [
                "Root decay caused by fungi like Pythium or Rhizoctonia, leading to stunted growth"
            ],
            "treatment": "Improve drainage and reduce watering. Use fungicides like Metalaxyl or Fosetyl-Al."
        },
        {
            "plant": "Marigold",
            "disease": "Leaf Spot",
            "symptoms": [
                "Dark, sunken spots on leaves, leading to defoliation"
            ],
            "treatment": "Prune infected leaves. Apply fungicides like Chlorothalonil or Copper sulfate."
        },
        {
            "plant": "Marigold",
            "disease": "Aphid-borne Viruses",
            "symptoms": [
                "Leaf discoloration, stunting, and reduced bloom quality caused by aphid-transmitted viruses"
            ],
            "treatment": "Control aphids with insecticides or neem oil. Remove and destroy infected plants."
        },
        {
            "plant": "Rose",
            "disease": "Black Spot",
            "symptoms": [
                "Dark, circular spots with yellow halos on leaves, leading to defoliation"
            ],
            "treatment": "Prune infected leaves and dispose of them. Apply fungicides like Chlorothalonil or Myclobutanil."
        },
        {
            "plant": "Rose",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery growth on leaves, stems, and buds"
            ],
            "treatment": "Remove infected plant parts. Use fungicides like Sulfur or Potassium Bicarbonate."
        },
        {
            "plant": "Rose",
            "disease": "Downy Mildew",
            "symptoms": [
                "Yellowing and moldy growth on the undersides of leaves"
            ],
            "treatment": "Remove and destroy infected leaves. Apply fungicides like Mancozeb or Metalaxyl."
        },
        {
            "plant": "Rose",
            "disease": "Botrytis Blight",
            "symptoms": [
                "Gray mold on flowers, buds, and leaves, leading to decay"
            ],
            "treatment": "Prune infected areas and maintain good airflow. Use fungicides like Fenhexamid or Thiophanate-methyl."
        },
        {
            "plant": "Rose",
            "disease": "Rust",
            "symptoms": [
                "Orange to yellow spots on leaves and stems, reducing plant health"
            ],
            "treatment": "Remove infected leaves and stems. Use fungicides like Propiconazole or Tebuconazole."
        },
        {
            "plant": "Lily",
            "disease": "Botrytis Blight",
            "symptoms": [
                "Gray mold on flowers, leaves, and stems, leading to wilting and decay"
            ],
            "treatment": "Prune infected areas and maintain proper air circulation. Apply fungicides like Botran or Thiophanate-methyl."
        },
        {
            "plant": "Lily",
            "disease": "Lily Mosaic Virus",
            "symptoms": [
                "Mosaic patterns, yellowing, and stunted growth of leaves and flowers"
            ],
            "treatment": "Remove and destroy infected plants. Control aphid vectors that spread the virus."
        },
        {
            "plant": "Lily",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery growth on leaves, reducing plant vigor"
            ],
            "treatment": "Prune affected leaves. Use fungicides like Sulfur or Potassium Bicarbonate."
        },
        {
            "plant": "Lily",
            "disease": "Fusarium Wilt",
            "symptoms": [
                "Wilting, yellowing, and death of plants, often starting from the roots"
            ],
            "treatment": "Remove and destroy infected plants. Use resistant plant varieties and improve soil drainage."
        },
        {
            "plant": "Lily",
            "disease": "Leaf Spot",
            "symptoms": [
                "Circular or irregular spots on leaves, leading to defoliation"
            ],
            "treatment": "Prune infected leaves and avoid overhead watering. Use fungicides like Copper or Chlorothalonil."
        },
        {
            "plant": "Lily",
            "disease": "Root Rot",
            "symptoms": [
                "Root decay, poor growth, and yellowing of leaves"
            ],
            "treatment": "Improve soil drainage and avoid overwatering. Apply fungicides like Metalaxyl or Fosetyl-Al."
        },
        {
            "plant": "Chrysanthemum",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery growth on leaves, stems, and buds, reducing plant vigor"
            ],
            "treatment": "Prune infected areas. Apply fungicides like Sulfur or Potassium Bicarbonate."
        },
        {
            "plant": "Chrysanthemum",
            "disease": "Botrytis Blight",
            "symptoms": [
                "Gray mold on flowers, stems, and leaves, leading to decay"
            ],
            "treatment": "Improve air circulation and prune dead tissue. Use fungicides like Thiophanate-methyl or Botran."
        },
        {
            "plant": "Chrysanthemum",
            "disease": "Rust",
            "symptoms": [
                "Orange or yellow spots and pustules on leaves, affecting photosynthesis"
            ],
            "treatment": "Remove infected leaves and improve air circulation. Apply fungicides like Triadimefon or Myclobutanil."
        },
        {
            "plant": "Chrysanthemum",
            "disease": "Root Rot",
            "symptoms": [
                "Root decay caused by fungi like Pythium or Rhizoctonia, leading to poor growth"
            ],
            "treatment": "Improve soil drainage and reduce watering. Apply fungicides like Metalaxyl or Fosetyl-Al."
        },
        {
            "plant": "Chrysanthemum",
            "disease": "Fusarium Wilt",
            "symptoms": [
                "Wilting, yellowing, and death of plants, often starting from the roots"
            ],
            "treatment": "Remove and dispose of infected plants. Use resistant varieties and improve soil health."
        },
        {
            "plant": "Chrysanthemum",
            "disease": "Cercospora Leaf Spot",
            "symptoms": [
                "Dark, circular spots on leaves, leading to defoliation"
            ],
            "treatment": "Remove affected leaves and avoid overhead watering. Use fungicides like Copper or Chlorothalonil."
        },
        {
            "plant": "Chrysanthemum",
            "disease": "Aphid-borne Viruses",
            "symptoms": [
                "Stunting, yellowing, and leaf distortion caused by aphid-transmitted viruses"
            ],
            "treatment": "Control aphids with insecticidal soap or neem oil. Remove infected plants and use resistant varieties."
        },
        {
            "plant": "Aloe Vera",
            "disease": "Root Rot",
            "symptoms": [
                "Root decay and poor plant growth caused by fungi like Pythium"
            ],
            "treatment": "Improve soil drainage and reduce overwatering. Use fungicides like Metalaxyl or Pythium-targeting products."
        },
        {
            "plant": "Aloe Vera",
            "disease": "Leaf Spot",
            "symptoms": [
                "Lesions or spots on leaves caused by fungal or bacterial infection"
            ],
            "treatment": "Remove infected leaves and avoid wetting foliage. Use fungicides like Copper-based products or Chlorothalonil."
        },
        {
            "plant": "Aloe Vera",
            "disease": "Leaf Mottle Virus",
            "symptoms": [
                "Yellowing and streaking of leaves caused by viral infection"
            ],
            "treatment": "Remove and destroy infected plants. Control aphids and use resistant plant varieties."
        },
        {
            "plant": "Ashwagandha",
            "disease": "Root Rot",
            "symptoms": [
                "Decay and poor root development caused by fungi like Fusarium and Rhizoctonia"
            ],
            "treatment": "Improve soil drainage. Use fungicides like Thiophanate-methyl or Fosetyl-Al."
        },
        {
            "plant": "Ashwagandha",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery growth on leaves, reducing plant health"
            ],
            "treatment": "Prune infected plant parts. Apply fungicides like Sulfur or Potassium bicarbonate."
        },
        {
            "plant": "Ashwagandha",
            "disease": "Leaf Spot",
            "symptoms": [
                "Dark, circular spots on leaves caused by fungal or bacterial infection"
            ],
            "treatment": "Remove affected leaves. Use fungicides like Chlorothalonil or Copper-based products."
        },
        {
            "plant": "Ashwagandha",
            "disease": "Blight",
            "symptoms": [
                "Wilting, yellowing, and death of plants caused by bacterial or fungal infection"
            ],
            "treatment": "Remove infected plants. Apply fungicides like Copper hydroxide or Streptomycin for bacterial blight."
        },
        {
            "plant": "Ashwagandha",
            "disease": "Wilt",
            "symptoms": [
                "Wilting and yellowing of leaves caused by soil-borne fungi like Fusarium"
            ],
            "treatment": "Avoid overhead watering. Use resistant varieties and soil fungicides like Carbendazim."
        },
        {
            "plant": "Tulsi (Holy Basil)",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery growth on leaves, affecting photosynthesis"
            ],
            "treatment": "Prune infected areas. Apply fungicides like Sulfur or Neem oil."
        },
        {
            "plant": "Tulsi (Holy Basil)",
            "disease": "Root Rot",
            "symptoms": [
                "Root decay caused by fungi like Pythium and Fusarium, leading to poor plant growth"
            ],
            "treatment": "Improve drainage. Use fungicides like Thiophanate-methyl or Phytophthora-resistant varieties."
        },
        {
            "plant": "Tulsi (Holy Basil)",
            "disease": "Leaf Spot",
            "symptoms": [
                "Dark, circular spots on leaves caused by fungal or bacterial infection"
            ],
            "treatment": "Remove infected leaves. Apply fungicides like Chlorothalonil or Copper-based fungicides."
        },
        {
            "plant": "Tulsi (Holy Basil)",
            "disease": "Blight",
            "symptoms": [
                "Wilting, yellowing, and death of leaves and stems caused by fungal or bacterial disease"
            ],
            "treatment": "Prune affected parts. Use bactericides like Streptomycin for bacterial blight or fungicides for fungal types."
        },
        {
            "plant": "Tulsi (Holy Basil)",
            "disease": "Downy Mildew",
            "symptoms": [
                "Yellowing and moldy growth on the underside of leaves"
            ],
            "treatment": "Avoid overhead watering. Use fungicides like Mancozeb or Copper-based treatments."
        },
        {
            "plant": "Tulsi (Holy Basil)",
            "disease": "Aphid-borne Viruses",
            "symptoms": [
                "Stunting, leaf curling, and yellowing caused by aphid-transmitted viruses"
            ],
            "treatment": "Control aphid populations with insecticidal soap or Neem oil. Remove infected plants and avoid replanting near infected areas."
        },
        {
            "plant": "Neem",
            "disease": "Powdery Mildew",
            "symptoms": [
                "White, powdery spots on leaves, reducing plant health"
            ],
            "treatment": "Remove infected leaves. Apply fungicides like Sulfur, Neem oil, or Potassium bicarbonate."
        },
        {
            "plant": "Neem",
            "disease": "Leaf Spot",
            "symptoms": [
                "Dark, circular lesions on leaves caused by fungal or bacterial disease"
            ],
            "treatment": "Prune affected leaves. Use fungicides like Copper-based fungicides or Mancozeb."
        },
        {
            "plant": "Neem",
            "disease": "Root Rot",
            "symptoms": [
                "Root decay caused by fungi like Pythium and Fusarium, leading to plant stunting"
            ],
            "treatment": "Improve soil drainage. Use fungicides like Thiophanate-methyl or remove infected plants."
        },
        {
            "plant": "Neem",
            "disease": "Dieback",
            "symptoms": [
                "Death of branches and twigs caused by fungal disease"
            ],
            "treatment": "Prune infected branches. Apply fungicides like Copper or Chlorothalonil."
        },
        {
            "plant": "Neem",
            "disease": "Canker",
            "symptoms": [
                "Lesions on the stem and branches caused by fungal or bacterial infection"
            ],
            "treatment": "Prune affected branches. Apply wound sealers and fungicides like Copper-based treatments."
        },
        {
            "plant": "Neem",
            "disease": "Nematodes",
            "symptoms": [
                "Root-knot nematodes causing galls on roots, reducing nutrient uptake and growth"
            ],
            "treatment": "Improve soil health with organic matter. Use nematicides or crop rotation to manage nematode populations."
        },
        {
            "plant": "Teak",
            "disease": "Teak Leaf Spot",
            "symptoms": [
                "Circular spots on leaves caused by fungal or bacterial disease, leading to premature leaf drop"
            ],
            "treatment": "Remove infected leaves. Apply fungicides like Copper-based fungicides or Mancozeb."
        },
        {
            "plant": "Teak",
            "disease": "Teak Wilt",
            "symptoms": [
                "Yellowing, wilting, and death of branches caused by fungal infection"
            ],
            "treatment": "Prune infected branches. Apply systemic fungicides like Propiconazole."
        },
        {
            "plant": "Teak",
            "disease": "Root Rot",
            "symptoms": [
                "Root decay caused by fungi like Fusarium, leading to tree decline"
            ],
            "treatment": "Improve soil drainage. Use fungicides like Thiophanate-methyl or remove affected roots."
        },
        {
            "plant": "Bamboo",
            "disease": "Bamboo Blight",
            "symptoms": [
                "Yellowing, wilting, and dieback of shoots and leaves caused by fungal infection"
            ],
            "treatment": "Prune infected shoots and leaves. Apply copper-based fungicides or systemic fungicides like Propiconazole."
        },
        {
            "plant": "Bamboo",
            "disease": "Bamboo Rust",
            "symptoms": [
                "Orange, rust-colored spots on leaves and stems caused by fungal infection"
            ],
            "treatment": "Remove and destroy infected leaves. Use fungicides like Chlorothalonil or Mancozeb."
        },
        {
            "plant": "Bamboo",
            "disease": "Pest Infestations",
            "symptoms": [
                "Damage caused by bamboo borers and termites, weakening the plant"
            ],
            "treatment": "Use insecticides like Imidacloprid or neem oil. Remove infested parts and promote good soil health."
        },
        {
            "plant": "Sal",
            "disease": "Sal Wilt",
            "symptoms": [
                "Yellowing, wilting, and tree death caused by fungi like Fusarium or Ceratocystis species"
            ],
            "treatment": "Prune infected branches. Apply fungicides like Benomyl or Thiophanate-methyl to the base of the tree."
        },
        {
            "plant": "Sal",
            "disease": "Leaf Spot",
            "symptoms": [
                "Dark spots on leaves caused by fungal or bacterial infection, leading to defoliation"
            ],
            "treatment": "Remove and destroy infected leaves. Apply fungicides such as Copper or Mancozeb."
        },
        {
            "plant": "Sal",
            "disease": "Root Rot",
            "symptoms": [
                "Root decay caused by various fungi, leading to stunted growth and tree mortality"
            ],
            "treatment": "Improve soil drainage and reduce watering. Apply fungicides like Thiophanate-methyl or use biological control like Trichoderma spp."
        },
        {
            "plant": "Pulpwood (Eucalyptus)",
            "disease": "Eucalyptus Rust",
            "symptoms": [
                "Orange, rust-colored pustules on leaves, leading to defoliation and reduced growth"
            ],
            "treatment": "Remove infected leaves. Apply fungicides like Copper or Chlorothalonil."
        },
        {
            "plant": "Pulpwood (Eucalyptus)",
            "disease": "Canker Diseases",
            "symptoms": [
                "Lesions on stems, branches, and trunks caused by fungal or bacterial infections, leading to dieback"
            ],
            "treatment": "Prune infected areas. Apply copper-based fungicides to wounds."
        },
        {
            "plant": "Pulpwood (Eucalyptus)",
            "disease": "Leaf Spot",
            "symptoms": [
                "Dark, circular lesions on leaves caused by fungal or bacterial infection, leading to premature leaf drop"
            ],
            "treatment": "Remove infected leaves. Apply fungicides such as Mancozeb or Copper."
        },
        {
            "plant": "Pulpwood (Eucalyptus)",
            "disease": "Root Rot",
            "symptoms": [
                "Root decay caused by fungi like Phytophthora, leading to stunting of tree growth"
            ],
            "treatment": "Improve drainage. Use fungicides like Fosetyl-Al or Phosphorous acid."
        },
        {
            "plant": "Pulpwood (Eucalyptus)",
            "disease": "Eucalyptus Gall",
            "symptoms": [
                "Abnormal galls on leaves and stems caused by insects or fungi"
            ],
            "treatment": "Prune galls and infected branches. Apply insecticides or fungicides based on the cause."
        },
        {
            "plant": "Pulpwood (Eucalyptus)",
            "disease": "Fusarium Wilt",
            "symptoms": [
                "Yellowing and wilting of leaves caused by fungal infection, often leading to tree death"
            ],
            "treatment": "Remove infected trees. Apply fungicides like Thiophanate-methyl."
        },
        {
            "plant": "Pulpwood (Eucalyptus)",
            "disease": "Corymbia Dieback",
            "symptoms": [
                "Wilting, dieback, and decay of branches and stems caused by fungal infection"
            ],
            "treatment": "Prune dead branches. Apply fungicides like Trichoderma or Phosphorous acid."
        }
    
    ];

module.exports = plantDiseaseData;