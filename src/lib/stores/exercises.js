import { localStore } from '$lib/stores/localStore.js';

const Exercises = localStore('Exercises', [
	{
		id: '1',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionBenchX',
		name: '45° Hyperextension (across bench, arms crossed)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '2',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionBenchArmsUp',
		name: '45° Hyperextension (across bench, arms up)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '3',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionBenchHips',
		name: '45° Hyperextension (across bench, hands behind hips)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '4',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionBenchNeck',
		name: '45° Hyperextension (across bench, hands behind neck)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '5',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionArmsCrossed',
		name: '45° Hyperextension (arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '6',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionArmsUp',
		name: '45° Hyperextension (arms up)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '7',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionHips',
		name: '45° Hyperextension (hands behind hips)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '8',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionNeck',
		name: '45° Hyperextension (hands behind neck)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '9',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionBallX',
		name: '45° Hyperextension (on stability ball, arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '10',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionBallArmsUp',
		name: '45° Hyperextension (on stability ball, arms up)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '11',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionBallHips',
		name: '45° Hyperextension (on stability ball, hands behind hips)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '12',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BW45HyperextensionBallNeck',
		name: '45° Hyperextension (on stability ball, hands behind neck)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '13',
		url: 'https://exrx.net/WeightExercises/TransverseAbdominis/AbdominalVacuum',
		name: 'Abdominal Vacuum',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Trans Ab',
			target: ['Transverse Abdominis'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '14',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWAlternatingBirdDog',
		name: 'Alternating Bird Dog',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: [
				'Gluteus Maximus',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Deltoid, Anterior',
				'Deltoid, Lateral'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '15',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWAlternatingBirdDogExBall',
		name: 'Alternating Bird Dog (on exercise ball)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: [
				'Gluteus Maximus',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Deltoid, Anterior',
				'Deltoid, Lateral',
				'Hamstrings'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '16',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWAlternatingStepDown',
		name: 'Alternating Step Down',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (following leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '17',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWAlternatingStepDown',
		name: 'Alternating Step-down',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (following leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '18',
		url: 'https://exrx.net/WeightExercises/Obliques/BWAngledSideBridge',
		name: 'Angled Side Bridge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Gluteus Medius',
				'Gluteus Minimus',
				'Tensor Fasciae Latae',
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis',
				'Adductors, Hip',
				'Pectineus',
				'Gracilis',
				'Gluteus Maximus, Lower Fibers',
				'Deltoid, Lateral',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Levator Scapulae'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '19',
		url: 'https://exrx.net/WeightExercises/HipAbductor/BWAngledSideBridgeHipAbduction',
		name: 'Angled Side Bridge Hip Abduction',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Tensor Fasciae Latae', 'Gluteus Medius', 'Gluteus Minimus'],
			synergists: [
				'Obliques',
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis',
				'Deltoid, Lateral',
				'Levator Scapulae'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '20',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/BWArcherPullup',
		name: 'Archer Pull-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '21',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BWArcherPushup',
		name: 'Archer Push-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '22',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWHyperextensionBallArmsCrossed',
		name: 'Back Extension (on stability ball, arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '23',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWHyperextensionBall',
		name: 'Back Extension (on stability ball, arms down)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '24',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWHyperextensionBallArmsUp',
		name: 'Back Extension (on stability ball, arms up)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '25',
		url: 'https://exrx.net/WeightExercises/Other/BalanceBoardSquat',
		name: 'Balance Board Squat',
		equipment: ['Other'],
		force: ['Push'],
		muscles: {
			category: 'Miscellaneous',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '26',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWBallCrunch',
		name: 'Ball Crunch (on stability ball)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '27',
		url: 'https://exrx.net/WeightExercises/Splenius/BRNeckRetraction',
		name: 'Band Resistive Neck Retraction',
		equipment: ['Band'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '28',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/ASArcherPullupBand',
		name: 'Band-assisted Archer Pull-up',
		equipment: ['Band'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '29',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/ASChestDipBand',
		name: 'Band-assisted Chest Dip',
		equipment: ['Band'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '30',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/ASChinupBand',
		name: 'Band-assisted Chin-up',
		equipment: ['Band'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '31',
		url: 'https://exrx.net/WeightExercises/Hamstrings/ASInverseLegCurlBands',
		name: 'Band-assisted Inverse Leg Curl',
		equipment: ['Band'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '32',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/ASNeutralGripChinupBand',
		name: 'Band-assisted Neutral Grip Chin-up',
		equipment: ['Band'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '33',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/ASNeutralGripPullupFootBand',
		name: 'Band-assisted Neutral Grip Pull-up',
		equipment: ['Band'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '34',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/ASOpenCenteredPullupBand',
		name: 'Band-assisted Open Centered Pull-up',
		equipment: ['Band'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '35',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/ASParallelGripPullupBand',
		name: 'Band-assisted Parallel Grip Pull-up',
		equipment: ['Band'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '36',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/ASPullupBand',
		name: 'Band-assisted Pull-up',
		equipment: ['Band'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '37',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/ASRearPullupBand',
		name: 'Band-assisted Rear Pull-up',
		equipment: ['Band'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '38',
		url: 'https://exrx.net/WeightExercises/Triceps/ASTricepsDipBand',
		name: 'Band-assisted Triceps Dip',
		equipment: ['Band'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '39',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BB45BackExtension',
		name: 'Barbell 45° Back Extension (on hyperextension apparatus)',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '40',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BB45HipExtension',
		name: 'Barbell 45° Back Raise (on hyperextension apparatus)',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '41',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BB45Hyperextension',
		name: 'Barbell 45° Hyperextension',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '42',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BB45Hyperextension',
		name: 'Barbell 45° Hyperextension',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '43',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LungeAndRearLunge',
		name: 'Barbell Alternating Lunge & Rear Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '44',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LungeAndRearLunge',
		name: 'Barbell Alternating Lunge & Rear Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '45',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LungeRearLunge',
		name: 'Barbell Alternating Lunge To Rear Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '46',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LungeRearLunge',
		name: 'Barbell Alternating Lunge To Rear Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '47',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBBackExtension',
		name: 'Barbell Back Extension (on hyperextension apparatus)',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '48',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BBHipExtension',
		name: 'Barbell Back Raise (on hyperextension apparatus)',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '49',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BBBehindNeckPress',
		name: 'Barbell Behind Neck Press',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '50',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BBBenchPress',
		name: 'Barbell Bench Press',
		equipment: ['Barbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '51',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BBBenchPressPowerLift',
		name: 'Barbell Bench Press (power lift)',
		equipment: ['Barbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '52',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BBBenchPressChain',
		name: 'Barbell Bench Press (with chains)',
		equipment: ['Barbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '53',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/BBBentArmPullover',
		name: 'Barbell Bent Arm Pullover',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '54',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBBentKneeGoodMorning',
		name: 'Barbell Bent Knee Good-morning',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Isolated'
	},
	{
		id: '55',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBBentKneeGoodMorning',
		name: 'Barbell Bent Knee Good-morning',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: [],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '56',
		url: 'https://exrx.net/WeightExercises/BackGeneral/BBBentOverRow',
		name: 'Barbell Bent-over Row',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '57',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBBlockPull',
		name: 'Barbell Block Pull',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Hamstrings (above knees)', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '58',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBBlockPull',
		name: 'Barbell Block Pull',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: [],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Quadriceps',
				'Hamstrings (above knees)',
				'Soleus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '59',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BBBoardPress',
		name: 'Barbell Board Press',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '60',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBBoxSquat',
		name: 'Barbell Box Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '61',
		url: 'https://exrx.net/WeightExercises/Triceps/BBCloseGripBenchPress',
		name: 'Barbell Close Grip Bench Press',
		equipment: ['Barbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Deltoid, Anterior', 'Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular']
		},
		mechanics: 'Compound'
	},
	{
		id: '62',
		url: 'https://exrx.net/WeightExercises/BackGeneral/BBCloseGripBentOverRow',
		name: 'Barbell Close Grip Bent-over Row',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '63',
		url: 'https://exrx.net/WeightExercises/Triceps/BBCloseGripInclineBenchPress',
		name: 'Barbell Close Grip Incline Bench Press',
		equipment: ['Barbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Deltoid, Anterior', 'Pectoralis Major, Clavicular']
		},
		mechanics: 'Compound'
	},
	{
		id: '64',
		url: 'https://exrx.net/WeightExercises/Biceps/BBCurl',
		name: 'Barbell Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '65',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBDeadlift',
		name: 'Barbell Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Hamstrings (top half)', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '66',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBDeadlift',
		name: 'Barbell Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Quadriceps',
				'Hamstrings (top half)',
				'Soleus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '67',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BBDeclineBenchPress',
		name: 'Barbell Decline Bench Press',
		equipment: ['Barbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '68',
		url: 'https://exrx.net/WeightExercises/Triceps/BBDeclineTriExt',
		name: 'Barbell Decline Triceps Extension',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '69',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBDeficitDeadlift',
		name: 'Barbell Deficit Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Hamstrings (above knees)', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '70',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBDeficitDeadlift',
		name: 'Barbell Deficit Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: [],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Quadriceps',
				'Hamstrings (above knees)',
				'Soleus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '71',
		url: 'https://exrx.net/WeightExercises/Biceps/BBDragCurl',
		name: 'Barbell Drag Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis', 'Deltoid, Posterior', 'Deltoid, Anterior']
		},
		mechanics: 'Isolated'
	},
	{
		id: '72',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BBFloorPress',
		name: 'Barbell Floor Press',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '73',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BBFrontRaise',
		name: 'Barbell Front Raise',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '74',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBFrontSquat',
		name: 'Barbell Front Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '75',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBFrontSquat',
		name: 'Barbell Front Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '76',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBFullSquat',
		name: 'Barbell Full Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '77',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBFullSquat',
		name: 'Barbell Full Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '78',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BBGluteHamRaise',
		name: 'Barbell Glute-Ham Raise',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Gastrocnemius',
				'Sartorius',
				'Gracilis',
				'Popliteus'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '79',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BBGoodMorning',
		name: 'Barbell Good-morning',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '80',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BBGuillotineBenchPress',
		name: 'Barbell Guillotine Bench Press',
		equipment: ['Barbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Anterior (see comments)'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '81',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBHackSquat',
		name: 'Barbell Hack Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '82',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBHackSquat',
		name: 'Barbell Hack Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '83',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBHipThrust',
		name: 'Barbell Hip Thrust',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps']
		},
		mechanics: 'Isolated'
	},
	{
		id: '84',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBHyperextension',
		name: 'Barbell Hyperextension',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '85',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BBHyperextension',
		name: 'Barbell Hyperextension',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '86',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/BBInclineBenchPress',
		name: 'Barbell Incline Bench Press',
		equipment: ['Barbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '87',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BBInclineFrontRaise',
		name: 'Barbell Incline Front Raise',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '88',
		url: 'https://exrx.net/WeightExercises/SerratusAnterior/BBInclineShoulderRaise',
		name: 'Barbell Incline Shoulder Raise',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Serratus',
			target: ['Serratus Anterior'],
			synergists: ['Pectoralis Major, Clavicular']
		},
		mechanics: 'Isolated'
	},
	{
		id: '89',
		url: 'https://exrx.net/WeightExercises/Triceps/BBInclineTriExt',
		name: 'Barbell Incline Triceps Extension',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '90',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BBHamstringRaise',
		name: 'Barbell Inverse Leg Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '91',
		url: 'https://exrx.net/WeightExercises/Triceps/BBJMPress',
		name: 'Barbell JM Bench Press',
		equipment: ['Barbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Deltoid, Anterior', 'Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular']
		},
		mechanics: 'Compound'
	},
	{
		id: '92',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBLateralStepUp',
		name: 'Barbell Lateral Step-up',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (Following Leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '93',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBLateralStepUp',
		name: 'Barbell Lateral Step-up',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (following leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '94',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBLunge',
		name: 'Barbell Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '95',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBLunge',
		name: 'Barbell Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '96',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/BBLyingRearDeltRow',
		name: 'Barbell Lying Rear Delt Row',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '97',
		url: 'https://exrx.net/WeightExercises/Triceps/BBLyingTriExt',
		name: 'Barbell Lying Triceps Extension',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '98',
		url: 'https://exrx.net/WeightExercises/Triceps/BBLyingTriExtSC',
		name: 'Barbell Lying Triceps Extension "Skull Crusher"',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '99',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BBMilitaryPress',
		name: 'Barbell Military Press',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '100',
		url: 'https://exrx.net/WeightExercises/Brachialis/BBPreacherCurl',
		name: 'Barbell Preacher Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '101',
		url: 'https://exrx.net/WeightExercises/Brachialis/BBProneInclineCurl',
		name: 'Barbell Prone Incline Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '102',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/BBPullover',
		name: 'Barbell Pullover',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '103',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BBPushCrunch',
		name: 'Barbell Push Crunch',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '104',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BBPushSitUp',
		name: 'Barbell Push Sit-up',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '105',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBRackPull',
		name: 'Barbell Rack Pull',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Hamstrings (above knees)', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '106',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBRackPull',
		name: 'Barbell Rack Pull',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: [],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Quadriceps',
				'Hamstrings (above knees)',
				'Soleus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '107',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/BBRearDeltRaise',
		name: 'Barbell Rear Delt Raise',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Deltoid, Lateral',
				'Trapezius, Upper (part II)',
				'Levator Scapulae',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Wrist Flexors'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '108',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/BBRearDeltRow',
		name: 'Barbell Rear Delt Row',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '109',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBRearLunge',
		name: 'Barbell Rear Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '110',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBRearLunge',
		name: 'Barbell Rear Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '111',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BBReclinedShoulderPress',
		name: 'Barbell Reclined Shoulder Press',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '112',
		url: 'https://exrx.net/WeightExercises/Triceps/BBReclinedTricepsExtension',
		name: 'Barbell Reclined Triceps Extension',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '113',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/BBReverseCalfRaise',
		name: 'Barbell Reverse Calf Raise',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '114',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/BBReverseCurl',
		name: 'Barbell Reverse Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '115',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/BBReversePreacherCurl',
		name: 'Barbell Reverse Preacher Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '116',
		url: 'https://exrx.net/WeightExercises/WristExtensors/BBReverseWristCurl',
		name: 'Barbell Reverse Wrist Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Wrist Extensors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '117',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSeatedGoodMorning',
		name: 'Barbell Seated Good-morning',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Isolated'
	},
	{
		id: '118',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BBSeatedMilitaryPress',
		name: 'Barbell Seated Military Press',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '119',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BBShoulderPress',
		name: 'Barbell Shoulder Press',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '120',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/BBShrug',
		name: 'Barbell Shrug',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '121',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSideLunge',
		name: 'Barbell Side Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus (lead leg)', 'Adductors (extended leg)', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '122',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBSideLunge',
		name: 'Barbell Side Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus (lead leg)',
				'Adductors (extended leg)',
				'Soleus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '123',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSideSplitSquat',
		name: 'Barbell Side Split Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus (lead leg)', 'Adductors (extended leg)', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '124',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBSideSplitSqaut',
		name: 'Barbell Side Split Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus (lead leg)',
				'Adductors (extended leg)',
				'Soleus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '125',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSingleLegSplitSquat',
		name: 'Barbell Single Leg Split Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '126',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBSingleLegSplitSquat',
		name: 'Barbell Single Leg Split Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '127',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSingleLegSquat',
		name: 'Barbell Single Leg Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '128',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBSingleLegSquat',
		name: 'Barbell Single Leg Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '129',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSingleLegStiffLegDeadlift',
		name: 'Barbell Single Leg Stiff-leg Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus (supporting leg)'],
			synergists: ['Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '130',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSplitSquat',
		name: 'Barbell Split Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '131',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBSplitSquat',
		name: 'Barbell Split Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '132',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBSquat',
		name: 'Barbell Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '133',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSquat',
		name: 'Barbell Squat (low bar)',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '134',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSquatChains',
		name: 'Barbell Squat (with chains)',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '135',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBSquatChains',
		name: 'Barbell Squat (with chains)',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '136',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/BBStandingCalfRaise',
		name: 'Barbell Standing Leg Calf Raise',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '137',
		url: 'https://exrx.net/WeightExercises/Brachialis/BBStandingPreacherCurl',
		name: 'Barbell Standing Preacher Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '138',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/BBStandingReversePreacherCurl',
		name: 'Barbell Standing Reverse Preacher Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '139',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBStepUp',
		name: 'Barbell Step-up',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (Second Leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '140',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBStepUp',
		name: 'Barbell Step-up',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (second leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '141',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBStiffLegDeadlift',
		name: 'Barbell Stiff Leg Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Erector Spinae', 'Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Compound'
	},
	{
		id: '142',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBStiffLegDeadlift',
		name: 'Barbell Stiff Leg Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Compound'
	},
	{
		id: '143',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBStraightLegDeadlift',
		name: 'Barbell Straight Leg Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Hamstrings', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '144',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BBStraightLegDeadlift',
		name: 'Barbell Straight Leg Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Erector Spinae', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '145',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBStrBackStiffLegDeadlift',
		name: 'Barbell Straight-back Stiff-leg Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '146',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BBStrBackStrLegDeadlift',
		name: 'Barbell Straight-back Straight-leg Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '147',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSumoBlockPull',
		name: 'Barbell Sumo Block Pull',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '148',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBSumoBlockPull',
		name: 'Barbell Sumo Block Pull',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: [],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Quadriceps', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '149',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBSumoDeadlift',
		name: 'Barbell Sumo Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '150',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BBSumoDeadlift',
		name: 'Barbell Sumo Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: [],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Quadriceps', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '151',
		url: 'https://exrx.net/WeightExercises/Triceps/BBTriExt',
		name: 'Barbell Triceps Extension',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '152',
		url: 'https://exrx.net/WeightExercises/Other/BBTurkishGetUp',
		name: 'Barbell Turkish Get-up',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Miscellaneous',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '153',
		url: 'https://exrx.net/WeightExercises/BackGeneral/BBUnderhandBentOverRow',
		name: 'Barbell Underhand Bent-over Row',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '154',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/BBUprightRow',
		name: 'Barbell Upright Row',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '155',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBWalkingLunge',
		name: 'Barbell Walking Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '156',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBWalkingLunge',
		name: 'Barbell Walking Lunge',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '157',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/BBWideGripUprightRow',
		name: 'Barbell Wide Grip Upright Row',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '158',
		url: 'https://exrx.net/WeightExercises/WristFlexors/BBWristCurl',
		name: 'Barbell Wrist Curl',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '159',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BBZercherSquat',
		name: 'Barbell Zercher Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '160',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BBZercherSquat',
		name: 'Barbell Zercher Squat',
		equipment: ['Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '161',
		url: 'https://exrx.net/WeightExercises/Triceps/BWBenchDip',
		name: 'Bench Dip',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '162',
		url: 'https://exrx.net/WeightExercises/Triceps/BWBenchDipFloor',
		name: 'Bench Dip (heels on floor)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '163',
		url: 'https://exrx.net/WeightExercises/Triceps/BWBenchDipBentKnee',
		name: 'Bench Dip (knees bent)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '164',
		url: 'https://exrx.net/WeightExercises/Obliques/BWBentKneeSideBridge',
		name: 'Bent Knee Side Bridge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Gluteus Medius',
				'Gluteus Minimus',
				'Tensor Fasciae Latae',
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis',
				'Adductors, Hip',
				'Pectineus',
				'Gluteus Maximus, Lower Fibers',
				'Deltoid, Lateral',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Levator Scapulae'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '165',
		url: 'https://exrx.net/WeightExercises/HipAbductor/BWBentKneeSideBridgeHipAbduction',
		name: 'Bent Knee Side Bridge Hip Abduction',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Tensor Fasciae Latae', 'Gluteus Medius', 'Gluteus Minimus'],
			synergists: [
				'Obliques',
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '166',
		url: 'https://exrx.net/WeightExercises/Obliques/BWBentKneeSidePlank',
		name: 'Bent Knee Side Plank',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '167',
		url: 'https://exrx.net/WeightExercises/Obliques/BWBentKneeLyingTwist',
		name: 'Bent-knee Lying Twist',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '168',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWBirdDog',
		name: 'Bird Dog',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: [
				'Gluteus Maximus',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Deltoid, Anterior',
				'Deltoid, Lateral'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '169',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWBirdDogExBall',
		name: 'Bird Dog (on stability ball)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: [
				'Gluteus Maximus',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Deltoid, Anterior',
				'Deltoid, Lateral',
				'Hamstrings'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '170',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBAlternatingCloseGripPulldown',
		name: 'Cable Alternating Close Grip Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '171',
		url: 'https://exrx.net/WeightExercises/Biceps/CBAlternatingCurl',
		name: 'Cable Alternating Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '172',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBAlternatingFrontRaise',
		name: 'Cable Alternating Front Raise',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '173',
		url: 'https://exrx.net/WeightExercises/Brachialis/CBAlternatingPreacherCurl',
		name: 'Cable Alternating Preacher Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '174',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBAlternatingPulldown',
		name: 'Cable Alternating Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '175',
		url: 'https://exrx.net/WeightExercises/Biceps/CBAlternatingSeatedCurl',
		name: 'Cable Alternating Seated Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '176',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBAlternatingSeatedFrontRaise',
		name: 'Cable Alternating Seated Front Raise',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '177',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBAlternatingHighRow',
		name: 'Cable Alternating Seated High Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Quadratus Lumborum',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '178',
		url: 'https://exrx.net/WeightExercises/Triceps/CBAlternatingSeatedPushdown',
		name: 'Cable Alternating Seated Pushdown',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '179',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBAlternatingStandingPulldown',
		name: 'Cable Alternating Standing Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '180',
		url: 'https://exrx.net/WeightExercises/HipFlexors/CBAssistedKneelingWheelRollout',
		name: 'Cable Assisted Wheel Rollout',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis',
				'Latissimus Dorsi',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Deltoid, Posterior',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '181',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBBarBehindNeckPress',
		name: 'Cable Bar Behind Neck Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '182',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBBarBenchPress',
		name: 'Cable Bar Bench Press',
		equipment: ['Cable', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '183',
		url: 'https://exrx.net/WeightExercises/Triceps/CBBarBentoverTriExt',
		name: 'Cable Bar Bent-over Triceps Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '184',
		url: 'https://exrx.net/WeightExercises/Biceps/CBBarCurl',
		name: 'Cable Bar Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '185',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBBarFrontRaise',
		name: 'Cable Bar Front Raise',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '186',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/CBBarInclineBenchPress',
		name: 'Cable Bar Incline Bench Press',
		equipment: ['Cable', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '187',
		url: 'https://exrx.net/WeightExercises/Triceps/CBBarLyingTriExt',
		name: 'Cable Bar Lying Triceps Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '188',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBBarMilitaryPress',
		name: 'Cable Bar Military Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '189',
		url: 'https://exrx.net/WeightExercises/Triceps/CBBarPushdown',
		name: 'Cable Bar Pushdown',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '190',
		url: 'https://exrx.net/WeightExercises/Triceps/CBBarPushdownHeavy',
		name: 'Cable Bar Pushdown (forward leaning)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '191',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/CBBarReverseCurl',
		name: 'Cable Bar Reverse Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '192',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBBarShoulderPress',
		name: 'Cable Bar Shoulder Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '193',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/CBBarShrug',
		name: 'Cable Bar Shrug',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '194',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBBarSquat',
		name: 'Cable Bar Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '195',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBBarSquat',
		name: 'Cable Bar Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '196',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBBarStandingChestPress',
		name: 'Cable Bar Standing Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '197',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBBarStandingDeclineChestPress',
		name: 'Cable Bar Standing Decline Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '198',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/CBBarStandingInclineChestPress',
		name: 'Cable Bar Standing Incline Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Serratus Anterior'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '199',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBBarUprightRow',
		name: 'Cable Bar Upright Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '200',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CB3QuarterSquatDipBelt',
		name: 'Cable Belt Half Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '201',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBSquatBelt',
		name: 'Cable Belt Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '202',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBSquatBelt',
		name: 'Cable Belt Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '203',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBBenchPress',
		name: 'Cable Bench Press',
		equipment: ['Cable', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '204',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBBentOverHipExtension',
		name: 'Cable Bent-over Hip Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Hamstrings']
		},
		mechanics: 'Isolated'
	},
	{
		id: '205',
		url: 'https://exrx.net/WeightExercises/Hamstrings/CBBentOverLegCurl',
		name: 'Cable Bent-over Leg Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: [
				'Gastrocnemius',
				'Gracilis',
				'Sartorius',
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Popliteus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '206',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBBentoverPullover',
		name: 'Cable Bent-over Pullover',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '207',
		url: 'https://exrx.net/WeightExercises/Triceps/CBBentoverTriExt',
		name: 'Cable Bent-over Triceps Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '208',
		url: 'https://exrx.net/WeightExercises/Triceps/CBBentoverTriExtRope',
		name: 'Cable Bent-over Triceps Extension (with rope attachment)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '209',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBChestDip',
		name: 'Cable Chest Dip',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '210',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBChestPress',
		name: 'Cable Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '211',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBUnderhandChinup',
		name: 'Cable Chin-up',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '212',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBCloseGripPulldown',
		name: 'Cable Close Grip Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '213',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBCloseGripPulldownStirrups',
		name: 'Cable Close Grip Pulldown (stirrups)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '214',
		url: 'https://exrx.net/WeightExercises/Brachialis/CBConcentrationCurl',
		name: 'Cable Concentration Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '215',
		url: 'https://exrx.net/WeightExercises/Biceps/CBCurl',
		name: 'Cable Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '216',
		url: 'https://exrx.net/WeightExercises/Biceps/CBCurlStirrups',
		name: 'Cable Curl (with stirrups)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '217',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBDeclineChestPress',
		name: 'Cable Decline Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '218',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBDeclineFly',
		name: 'Cable Decline Fly',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Biceps Brachii, Short Head'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '219',
		url: 'https://exrx.net/WeightExercises/Triceps/CBDeclineTricepsExt',
		name: 'Cable Decline Triceps Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '220',
		url: 'https://exrx.net/WeightExercises/Triceps/CBForwardTricepsExt',
		name: 'Cable Forward Triceps Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '221',
		url: 'https://exrx.net/WeightExercises/Supraspinatus/CBFrontLateralRaise',
		name: 'Cable Front Lateral Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Supraspinatus',
			target: ['Supraspinatus'],
			synergists: [
				'Deltoid, Lateral',
				'Deltoid, Anterior',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '222',
		url: 'https://exrx.net/WeightExercises/Supraspinatus/CBFullCanLateralRaise',
		name: 'Cable Full Can Lateral Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Supraspinatus',
			target: ['Supraspinatus'],
			synergists: [
				'Deltoid, Lateral',
				'Deltoid, Anterior',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '223',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBGluteKickback',
		name: 'Cable Glute Kickback',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '224',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/CBHammerCurl',
		name: 'Cable Hammer Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '225',
		url: 'https://exrx.net/WeightExercises/HipAbductor/CBHipAbduction',
		name: 'Cable Hip Abduction',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Abductors (listed below)'],
			synergists: ['Gluteus Medius', 'Gluteus Minimus', 'Tensor Fasciae Latae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '226',
		url: 'https://exrx.net/WeightExercises/HipAdductors/CBHipAdduction',
		name: 'Cable Hip Adduction',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Adductors',
			target: ['Adductors, Hip'],
			synergists: ['Pectineus', 'Gracilis', 'Gluteus Maximus, Lower Fibers']
		},
		mechanics: 'Isolated'
	},
	{
		id: '227',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/CBInclineBenchPress',
		name: 'Cable Incline Bench Press',
		equipment: ['Cable', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '228',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/CBInclineChestPress',
		name: 'Cable Incline Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '229',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/CBInclineFly',
		name: 'Cable Incline Fly',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Biceps Brachii, Short Head']
		},
		mechanics: 'Isolated'
	},
	{
		id: '230',
		url: 'https://exrx.net/WeightExercises/Triceps/CBInclinePushdown',
		name: 'Cable Incline Pushdown',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '231',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBInclineRow',
		name: 'Cable Incline Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Erector Spinae',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '232',
		url: 'https://exrx.net/WeightExercises/SerratusAnterior/CBInclineShoulderRaise',
		name: 'Cable Incline Shoulder Raise',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Serratus',
			target: ['Serratus Anterior'],
			synergists: ['Pectoralis Major, Clavicular']
		},
		mechanics: 'Isolated'
	},
	{
		id: '233',
		url: 'https://exrx.net/WeightExercises/Triceps/CBInclineTriExt',
		name: 'Cable Incline Triceps Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '234',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBKneelingBentoverPullover',
		name: 'Cable Kneeling Bent-over Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '235',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBKneelingCrunch',
		name: 'Cable Kneeling Crunch',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '236',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBOneArmKneelingRow',
		name: 'Cable Kneeling Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '237',
		url: 'https://exrx.net/WeightExercises/Triceps/CBKneelingTriExt',
		name: 'Cable Kneeling Triceps Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '238',
		url: 'https://exrx.net/WeightExercises/Obliques/CBKneelingTwistingCrunch',
		name: 'Cable Kneeling Twisting Crunch',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '239',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/CBNeckLtrFlxBelt',
		name: 'Cable Lateral Neck Flexion (with belt)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '240',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBLateralRaise',
		name: 'Cable Lateral Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '241',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBLateralRaiseClose',
		name: 'Cable Lateral Raise (pulleys close)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '242',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBLyingCrunchStabilityBall',
		name: 'Cable Lying Crunch (on stability ball)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '243',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBLyingFly',
		name: 'Cable Lying Fly',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Biceps Brachii, Short Head'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '244',
		url: 'https://exrx.net/WeightExercises/HipAdductors/CBLyingHipAdduction',
		name: 'Cable Lying Hip Adduction',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Adductors',
			target: ['Adductors, Hip'],
			synergists: ['Pectineus', 'Gracilis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '245',
		url: 'https://exrx.net/WeightExercises/HipExternalRotator/CBLyingHipExternalRotation',
		name: 'Cable Lying Hip External Rotation',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hip External Rotators',
			target: ['Hip External Rotators (listed below)'],
			synergists: [
				'Gemellus superior',
				'Gemellus inferior',
				'Obturator internus',
				'Obturator externus',
				'Quadratus femoris',
				'Piriformis',
				'Gluteus maximus',
				'Sartorius',
				'Gluteus medius, posterior fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '246',
		url: 'https://exrx.net/WeightExercises/HipAbductor/CBLyingHipInternalRotation',
		name: 'Cable Lying Hip Internal Rotation',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Internal Rotators (listed below)'],
			synergists: ['Gluteus Medius', 'Gluteus Minimus', 'Tensor Fasciae Latae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '247',
		url: 'https://exrx.net/WeightExercises/Hamstrings/CBLyingLegCurl',
		name: 'Cable Lying Leg Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '248',
		url: 'https://exrx.net/WeightExercises/HipFlexors/CBLyingLegRaise',
		name: 'Cable Lying Leg Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '249',
		url: 'https://exrx.net/WeightExercises/HipFlexors/CBLyingLegRaiseBench',
		name: 'Cable Lying Leg Raise (on bench)',
		equipment: ['Cable', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '250',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBLyingLegHipRaise',
		name: 'Cable Lying Leg-Hip Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '251',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBLyingLegHipRaiseBench',
		name: 'Cable Lying Leg-Hip Raise (on bench)',
		equipment: ['Cable', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '252',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBLyingRow',
		name: 'Cable Lying Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '253',
		url: 'https://exrx.net/WeightExercises/HipFlexors/CBLyingStraightLegRaise',
		name: 'Cable Lying Straight Leg Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '254',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBLyingStraightLegHipRaise',
		name: 'Cable Lying Straight Leg-Hip Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis',
				'Rectus Femoris',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '255',
		url: 'https://exrx.net/WeightExercises/Triceps/CBLyingTriExt',
		name: 'Cable Lying Triceps Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '256',
		url: 'https://exrx.net/WeightExercises/Splenius/CBNeckExt',
		name: 'Cable Neck Extension',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: [
				'Trapezius, Upper',
				'Levator Scapulae',
				'Erector Spinae, Cervicis & Capitis Fibers',
				'Sternocleidomastoid, Posterior Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '257',
		url: 'https://exrx.net/WeightExercises/Splenius/CBNeckExtBelt',
		name: 'Cable Neck Extension (with belt)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: [
				'Trapezius, Upper',
				'Levator Scapulae',
				'Erector Spinae, Cervicis & Capitis Fibers',
				'Sternocleidomastoid, Posterior Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '258',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/CBNeckFlx',
		name: 'Cable Neck Flexion',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '259',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/CBNeckFlxBelt',
		name: 'Cable Neck Flexion (with belt)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '260',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/CBNeckRotationBelt',
		name: 'Cable Neck Rotation (with belt)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '261',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBOneArmBentoverRow',
		name: 'Cable One Arm Bent-over Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '262',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBOneArmChestPress',
		name: 'Cable One Arm Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '263',
		url: 'https://exrx.net/WeightExercises/Biceps/CBOneArmCurl',
		name: 'Cable One Arm Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '264',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBFrontRaise',
		name: 'Cable One Arm Front Raise',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '265',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBFrontRaiseRope',
		name: 'Cable One Arm Front Raise (with rope)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '266',
		url: 'https://exrx.net/WeightExercises/SerratusAnterior/CBOneArmInclinePush',
		name: 'Cable One Arm Incline Push',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Serratus',
			target: ['Serratus Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '267',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBOneArmKneelingPulldown',
		name: 'Cable One Arm Kneeling Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '268',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBOneArmLateralRaise',
		name: 'Cable One Arm Lateral Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '269',
		url: 'https://exrx.net/WeightExercises/Brachialis/CBOneArmPreacherCurl',
		name: 'Cable One Arm Preacher Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '270',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBOneArmPulldown',
		name: 'Cable One Arm Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '271',
		url: 'https://exrx.net/WeightExercises/Triceps/CBOneArmPushdown',
		name: 'Cable One Arm Pushdown',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '272',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBOneArmRearDeltRow',
		name: 'Cable One Arm Rear Delt Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '273',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBOneArmRearLateralRaise',
		name: 'Cable One Arm Rear Lateral Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Deltoid, Lateral',
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '274',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBRearDeltPull',
		name: 'Cable One Arm Reverse Fly',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Deltoid, Lateral',
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Quadratus Lumborum'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '275',
		url: 'https://exrx.net/WeightExercises/WristExtensors/CBOneArmReverseWristCurl',
		name: 'Cable One Arm Reverse Wrist Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Wrist Extensors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '276',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBOneArmHighRow',
		name: 'Cable One Arm Seated High Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Erector Spinae'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '277',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBOneArmRow',
		name: 'Cable One Arm Seated Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Erector Spinae'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '278',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/CBOneArmShrug',
		name: 'Cable One Arm Shrug',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '279',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/CBOneArmSingleLegCalfRaise',
		name: 'Cable One Arm Single Leg Calf Raise',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '280',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBSingleLegSplitSquatOneArm',
		name: 'Cable One Arm Single Leg Split Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '281',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBSingleLegSplitSquatOneArm',
		name: 'Cable One Arm Single Leg Split Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '282',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBLungeOneArm',
		name: 'Cable One Arm Split Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '283',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBLungeOneArm',
		name: 'Cable One Arm Split Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '284',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBOneArmCrossRow',
		name: 'Cable One Arm Standing Cross Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '285',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/CBStandTwistInclineChestPress',
		name: 'Cable One Arm Standing Incline Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Serratus Anterior',
				'Obliques',
				'Quadratus Lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis',
				'Adductors, Hip'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '286',
		url: 'https://exrx.net/WeightExercises/Brachialis/CBOneArmStandingPreacherCurl',
		name: 'Cable One Arm Standing Preacher Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '287',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBOneArmStrBackHighRow',
		name: 'Cable One Arm Straight Back Seated High Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '288',
		url: 'https://exrx.net/WeightExercises/Triceps/CBOneArmTriExtPronated',
		name: 'Cable One Arm Triceps Extension (pronated grip)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '289',
		url: 'https://exrx.net/WeightExercises/Triceps/CBOneArmTriExt',
		name: 'Cable One Arm Triceps Extension (supinated grip)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '290',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBOneArmUprightRow',
		name: 'Cable One Arm Upright Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '291',
		url: 'https://exrx.net/WeightExercises/WristFlexors/CBOneArmWristCurl',
		name: 'Cable One Arm Wrist Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '292',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBOverheadSeatedCrunch',
		name: 'Cable Overhead Seated Crunch',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '293',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBParallelCloseGripChinup',
		name: 'Cable Parallel Close Grip Pull-up',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '294',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBParallelGripChinup',
		name: 'Cable Parallel Grip Pull-up',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '295',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBParallelGripPulldown',
		name: 'Cable Parallel Grip Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '296',
		url: 'https://exrx.net/WeightExercises/Brachialis/CBPreacherCurl',
		name: 'Cable Preacher Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '297',
		url: 'https://exrx.net/WeightExercises/Brachialis/CBPreacherCurlStirrups',
		name: 'Cable Preacher Curl (stirrups)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '298',
		url: 'https://exrx.net/WeightExercises/Brachialis/CBProneInclineCurl',
		name: 'Cable Prone Incline Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '299',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBPullup',
		name: 'Cable Pull-up',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '300',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBFrontPulldown',
		name: 'Cable Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '301',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBFrontPulldownProLatBar',
		name: 'Cable Pulldown (pro lat bar)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '302',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBPulldownStirrups',
		name: 'Cable Pulldown (stirrups)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '303',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBPullover',
		name: 'Cable Pullover',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Triceps Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '304',
		url: 'https://exrx.net/WeightExercises/Power/CBPushPull',
		name: 'Cable Push Pull',
		equipment: ['Cable'],
		force: ['Push', 'Pull'],
		muscles: {
			category: 'Miscellaneous',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '305',
		url: 'https://exrx.net/WeightExercises/Triceps/CBPushdown',
		name: 'Cable Pushdown',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '306',
		url: 'https://exrx.net/WeightExercises/Triceps/CBPushdownHeavy',
		name: 'Cable Pushdown (forward leaning)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '307',
		url: 'https://exrx.net/WeightExercises/Triceps/CBPushdownSupport',
		name: 'Cable Pushdown (with back support)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '308',
		url: 'https://exrx.net/WeightExercises/Triceps/CBPushdownRope',
		name: 'Cable Pushdown (with rope attachment)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '309',
		url: 'https://exrx.net/WeightExercises/Triceps/CBPushdownVBar',
		name: 'Cable Pushdown (with V-bar)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '310',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBRearDeltRow',
		name: 'Cable Rear Delt Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '311',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBRearDeltRowStirrups',
		name: 'Cable Rear Delt Row (stirrups)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '312',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBRearLateralRaise',
		name: 'Cable Rear Lateral Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Deltoid, Lateral',
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '313',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBRearLunge',
		name: 'Cable Rear Lunge',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '314',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBRearLunge',
		name: 'Cable Rear Lunge',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '315',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBRearPullup',
		name: 'Cable Rear Pull-up',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '316',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBRearPulldown',
		name: 'Cable Rear Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '317',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBRearStepdownLunge',
		name: 'Cable Rear Step-down Lunge',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '318',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBRearStepDownLunge',
		name: 'Cable Rear Step-down Lunge',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '319',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/CBReverseCalfRaise',
		name: 'Cable Reverse Calf Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '320',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/CBReverseCurl',
		name: 'Cable Reverse Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '321',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBStandingReverseFly',
		name: 'Cable Reverse Fly',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Deltoid, Lateral',
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '322',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/CBReversePreacherCurl',
		name: 'Cable Reverse Preacher Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '323',
		url: 'https://exrx.net/WeightExercises/WristExtensors/CBReverseWristCurl',
		name: 'Cable Reverse Wrist Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Wrist Extensors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '324',
		url: 'https://exrx.net/WeightExercises/WristExtensors/CBRollerWristExtention',
		name: 'Cable Roller Wrist Extension',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Wrist Extensors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '325',
		url: 'https://exrx.net/WeightExercises/WristFlexors/CBRollerWristFlexion',
		name: 'Cable Roller Wrist Flexion',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '326',
		url: 'https://exrx.net/WeightExercises/Obliques/CBRussianTwistBall',
		name: 'Cable Russian Twist (on stability ball)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Hip External Rotators',
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '327',
		url: 'https://exrx.net/WeightExercises/Obliques/CBCrossArmTwist',
		name: 'Cable Seated Cross Arm Twist',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '328',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBSeatedCrunch',
		name: 'Cable Seated Crunch',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '329',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBSeatedCrunchPL',
		name: 'Cable Seated Crunch (plate loaded)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '330',
		url: 'https://exrx.net/WeightExercises/Biceps/CBSeatedCurl',
		name: 'Cable Seated Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '331',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBSeatedFly',
		name: 'Cable Seated Fly',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Biceps Brachii, Short Head'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '332',
		url: 'https://exrx.net/WeightExercises/Supraspinatus/CBSeatedFrontLateralRaise',
		name: 'Cable Seated Front Lateral Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Supraspinatus',
			target: ['Supraspinatus'],
			synergists: [
				'Deltoid, Lateral',
				'Deltoid, Anterior',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '333',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBSeatedFrontRaise',
		name: 'Cable Seated Front Raise',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '334',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBSeatedHighRow',
		name: 'Cable Seated High Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Erector Spinae'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '335',
		url: 'https://exrx.net/WeightExercises/HipExternalRotator/CBSeatedHipExternalRotation',
		name: 'Cable Seated Hip External Rotation',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hip External Rotators',
			target: ['Hip External Rotators (listed below)'],
			synergists: [
				'Gemellus superior',
				'Gemellus inferior',
				'Obturator internus',
				'Obturator externus',
				'Quadratus femoris',
				'Gluteus maximus',
				'Sartorius',
				'Gluteus medius, posterior fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '336',
		url: 'https://exrx.net/WeightExercises/HipAbductor/CBSeatedHipInternalRotation',
		name: 'Cable Seated Hip Internal Rotation',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Internal Rotators (listed below)'],
			synergists: ['Gluteus Medius', 'Gluteus Minimus', 'Tensor Fasciae Latae', 'Piriformis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '337',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBSeatedLateralRaise',
		name: 'Cable Seated Lateral Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '338',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBSeatedStraightArmPullover',
		name: 'Cable Seated Pullover',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '339',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBSeatedRearDeltRowStirrups',
		name: 'Cable Seated Rear Delt Row (stirrups)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '340',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBSeatedRearLateralRaise',
		name: 'Cable Seated Rear Lateral Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '341',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBSeatedRearDeltPull',
		name: 'Cable Seated Reverse Fly',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Deltoid, Lateral',
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '342',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBSeatedRow',
		name: 'Cable Seated Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Erector Spinae',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '343',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/CBSeatedExternalRotation',
		name: 'Cable Seated Shoulder External Rotation',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Infraspinatus'],
			synergists: ['Teres Minor', 'Deltoid, Posterior']
		},
		mechanics: 'Isolated'
	},
	{
		id: '344',
		url: 'https://exrx.net/WeightExercises/Subscapularis/CBInternalRotation',
		name: 'Cable Seated Shoulder Internal Rotation',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Internal Rotators',
			target: ['Subscapularis'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '345',
		url: 'https://exrx.net/WeightExercises/Obliques/CBSeatedTwist',
		name: 'Cable Seated Twist',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '346',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBSeatedYRaise',
		name: 'Cable Seated Y Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Supraspinatus',
				'Teres Minor',
				'Infraspinatus',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Serratus Anterior, Inferior Digitations',
				'Deltoid, Anterior',
				'Deltoid, Posterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '347',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBSeatedYRaiseRope',
		name: 'Cable Seated Y Raise (with rope attachment)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Supraspinatus',
				'Teres Minor',
				'Infraspinatus',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Serratus Anterior, Inferior Digitations',
				'Deltoid, Anterior',
				'Deltoid, Posterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '348',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBShoulderPress',
		name: 'Cable Shoulder Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '349',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/CBShrug',
		name: 'Cable Shrug',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '350',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/CBShrugDualPulley',
		name: 'Cable Shrug (dual pulley)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '351',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/CBShrugStirrups',
		name: 'Cable Shrug (with stirrups)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '352',
		url: 'https://exrx.net/WeightExercises/Obliques/CBSideBend',
		name: 'Cable Side Bend',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '353',
		url: 'https://exrx.net/WeightExercises/Obliques/CBSideCrunch',
		name: 'Cable Side Crunch',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '354',
		url: 'https://exrx.net/WeightExercises/Triceps/CBSideTricepsExt',
		name: 'Cable Side Triceps Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '355',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBSimultaneousAlternatingStandingPulldown',
		name: 'Cable Simultaneous Alternating Standing Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '356',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/CBSingleLegCalfRaise',
		name: 'Cable Single Leg Calf Raise',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '357',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/CBSingleLegReverseCalfRaise',
		name: 'Cable Single Leg Reverse Calf Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '358',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBSingleLegSplitSquat',
		name: 'Cable Single Leg Split Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '359',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBSingleLegSplitSquat',
		name: 'Cable Single Leg Split Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '360',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBLungeTwoArm',
		name: 'Cable Split Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '361',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBLungeTwoArm',
		name: 'Cable Split Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '362',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBLunge',
		name: 'Cable Split Squat (belt)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '363',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBLunge',
		name: 'Cable Split Squat (belt)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '364',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBSquat',
		name: 'Cable Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '365',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBSquat',
		name: 'Cable Squat',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '366',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/CBStandingCalfRaise',
		name: 'Cable Standing Calf Raise',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '367',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBStandingChestPress',
		name: 'Cable Standing Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '368',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBStandingCrossRow',
		name: 'Cable Standing Cross Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '369',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBStandingCrunch',
		name: 'Cable Standing Crunch',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '370',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBStandingDeclineChestPress',
		name: 'Cable Standing Decline Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '371',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBStandingFly',
		name: 'Cable Standing Fly',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '372',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBStandingHipExtension',
		name: 'Cable Standing Hip Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Hamstrings']
		},
		mechanics: 'Isolated'
	},
	{
		id: '373',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/CBStandingInclineChestPress',
		name: 'Cable Standing Incline Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Serratus Anterior'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '374',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/CBStandingInclineFly',
		name: 'Cable Standing Incline Fly',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Biceps Brachii, Short Head']
		},
		mechanics: 'Isolated'
	},
	{
		id: '375',
		url: 'https://exrx.net/WeightExercises/Hamstrings/CBStandingLegCurl',
		name: 'Cable Standing Leg Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Compound'
	},
	{
		id: '376',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBStandingLegExtension',
		name: 'Cable Standing Leg Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Sartorius']
		},
		mechanics: 'Isolated'
	},
	{
		id: '377',
		url: 'https://exrx.net/WeightExercises/HipFlexors/CBStandingLegRaise',
		name: 'Cable Standing Leg Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '378',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBOneArmStandingLowRow',
		name: 'Cable Standing Low Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '379',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBStandingOverheadCrunch',
		name: 'Cable Standing Overhead Crunch',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '380',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/CBStandingOverheadCrunchMultiBar',
		name: 'Cable Standing Overhead Crunch (multi-exercise bar)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '381',
		url: 'https://exrx.net/WeightExercises/Brachialis/CBStandingPreacherCurl',
		name: 'Cable Standing Preacher Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '382',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBStandingRearDeltRowStirrups',
		name: 'Cable Standing Rear Delt Row (stirrups)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '383',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBStandingRearDeltRowRope',
		name: 'Cable Standing Rear Delt Row (with rope)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '384',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/CBStandingReversePreacherCurl',
		name: 'Cable Standing Reverse Preacher Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '385',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBOneArmStandingRow',
		name: 'Cable Standing Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '386',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/CBStandingExternalRotation',
		name: 'Cable Standing Shoulder External Rotation',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Infraspinatus'],
			synergists: ['Teres Minor', 'Deltoid, Posterior']
		},
		mechanics: 'Isolated'
	},
	{
		id: '387',
		url: 'https://exrx.net/WeightExercises/Subscapularis/CBStandingInternalRotation',
		name: 'Cable Standing Shoulder Internal Rotation',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Internal Rotators',
			target: ['Subscapularis'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '388',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBStandingShoulderPress',
		name: 'Cable Standing Shoulder Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '389',
		url: 'https://exrx.net/WeightExercises/HipFlexors/CBStandingStraightLegRaise',
		name: 'Cable Standing Straight Leg Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '390',
		url: 'https://exrx.net/WeightExercises/Obliques/CBStandingTwistingCrunch',
		name: 'Cable Standing Twisting Crunch',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis', 'Psoas major']
		},
		mechanics: 'Isolated'
	},
	{
		id: '391',
		url: 'https://exrx.net/WeightExercises/Obliques/CBStandingTwistingCrunchSingle',
		name: 'Cable Standing Twisting Crunch (single side)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis', 'Psoas major']
		},
		mechanics: 'Isolated'
	},
	{
		id: '392',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBSingleLegSquat',
		name: 'Cable Step Down',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '393',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBStepUp',
		name: 'Cable Step-up',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (Second Leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '394',
		url: 'https://exrx.net/WeightExercises/Quadriceps/CBStepUp',
		name: 'Cable Step-up',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (second leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '395',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBStiffLegDeadlift',
		name: 'Cable Stiff Leg Deadlift',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Erector Spinae', 'Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Compound'
	},
	{
		id: '396',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/CBStiffLegDeadlift',
		name: 'Cable Stiff Leg Deadlift',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Compound'
	},
	{
		id: '397',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBStraightBackInclineRow',
		name: 'Cable Straight Back Incline Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '398',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBStraightBackSeatedRow',
		name: 'Cable Straight Back Seated Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '399',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/CBStraightLegDeadlift',
		name: 'Cable Straight Leg Deadlift',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Hamstrings', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '400',
		url: 'https://exrx.net/WeightExercises/Hamstrings/CBStraightLegDeadlift',
		name: 'Cable Straight Leg Deadlift',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Erector Spinae', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '401',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/CBStrBackStiffLegDeadlift',
		name: 'Cable Straight-back Stiff-leg Deadlift',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '402',
		url: 'https://exrx.net/WeightExercises/Hamstrings/CBStrBackStrLegDeadlift',
		name: 'Cable Straight-back Straight-leg Deadlift',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '403',
		url: 'https://exrx.net/WeightExercises/Biceps/CBSupineCurl',
		name: 'Cable Supine Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '404',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/CBSupineRearLateralRaise',
		name: 'Cable Supine Reverse Fly',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Deltoid, Lateral',
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '405',
		url: 'https://exrx.net/WeightExercises/Triceps/CBTriDip',
		name: 'Cable Triceps Dip',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '406',
		url: 'https://exrx.net/WeightExercises/Triceps/CBTriExt',
		name: 'Cable Triceps Extension',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '407',
		url: 'https://exrx.net/WeightExercises/Triceps/CBStandingTricepsExtensionRope',
		name: 'Cable Triceps Extension (with rope)',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['None']
		},
		mechanics: 'Isolated'
	},
	{
		id: '408',
		url: 'https://exrx.net/WeightExercises/Obliques/CBTwist',
		name: 'Cable Twist',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: [],
			synergists: [
				'Tensor fasciae latae',
				'Gluteus medius',
				'Gluteus minimus, anterior fibers',
				'Adductors, Hip',
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '409',
		url: 'https://exrx.net/WeightExercises/Obliques/CBDownUpTwist',
		name: 'Cable Twist (down up)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: [],
			synergists: [
				'Tensor fasciae latae',
				'Gluteus medius',
				'Gluteus minimus, anterior fibers',
				'Adductors, Hip',
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '410',
		url: 'https://exrx.net/WeightExercises/Obliques/CBUpDownTwist',
		name: 'Cable Twist (up down)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: [],
			synergists: [
				'Tensor fasciae latae',
				'Gluteus medius',
				'Gluteus minimus, anterior fibers',
				'Adductors, Hip',
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '411',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBTwistingChestPress',
		name: 'Cable Twisting Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Obliques',
				'Serratus Anterior'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '412',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/CBTwistingOverheadPress',
		name: 'Cable Twisting Overhead Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Gluteus Maximus',
				'Adductor Magnus',
				'Quadriceps',
				'Soleus',
				'Obliques',
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis',
				'Tensor Fasciae Latae',
				'Gluteus Medius'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '413',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBOneArmTwistingHighRow',
		name: 'Cable Twisting Seated High Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Obliques',
				'Quadratus Lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '414',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBOneArmTwistingRow',
		name: 'Cable Twisting Seated Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Erector Spinae',
				'Obliques',
				'Quadratus Lumborum',
				'Psoas Major',
				'Iliocastalis Lumborum',
				'Iliocastalis Thoracis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '415',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/CBTwistingStandingChestPress',
		name: 'Cable Twisting Standing Chest Press',
		equipment: ['Cable'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Serratus Anterior',
				'Obliques',
				'Quadratus Lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis',
				'Tensor fasciae latae',
				'Gluteus medius',
				'Gluteus minimus, anterior fibers',
				'Adductors, Hip'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '416',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBStandingTwistingHighRow',
		name: 'Cable Twisting Standing High Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Obliques',
				'Quadratus Lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '417',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBTwistingOverheadPull',
		name: 'Cable Twisting Standing Overhead Pull',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Obliques',
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '418',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/CBUnderhandPulldown',
		name: 'Cable Underhand Pulldown',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '419',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBUprightRow',
		name: 'Cable Upright Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '420',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBUprightRowDualPulley',
		name: 'Cable Upright Row (dual pulley)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '421',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBUprightRowStirrups',
		name: 'Cable Upright Row (stirrup attachments)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '422',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBUprightRowRope',
		name: 'Cable Upright Row (with rope attachment)',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '423',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/CBUprightExternalRotation',
		name: 'Cable Upright Shoulder External Rotation',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Teres Minor'],
			synergists: ['Infraspinatus', 'Deltoid, Posterior', 'Supraspinatus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '424',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBWideGripSeatedRow',
		name: 'Cable Wide Grip Seated Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Erector Spinae'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '425',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CBWideGripStrBackSeatedRow',
		name: 'Cable Wide Grip Straight Back Seated Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '426',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBWideGripUprightRow',
		name: 'Cable Wide Grip Upright Row',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '427',
		url: 'https://exrx.net/WeightExercises/WristFlexors/CBWristCurl',
		name: 'Cable Wrist Curl',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '428',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/CBYRaise',
		name: 'Cable Y Raise',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Supraspinatus',
				'Teres Minor',
				'Infraspinatus',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Serratus Anterior, Inferior Digitations',
				'Deltoid, Anterior',
				'Deltoid, Posterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '429',
		url: 'https://exrx.net/WeightExercises/BackGeneral/CamberedBarLyingRow',
		name: 'Cambered Barbell Lying Row',
		equipment: ['Cambered Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '430',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/CBSeatShrug',
		name: 'Cambered Barbell Seated Shrug',
		equipment: ['Cable'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '431',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BWChestDip',
		name: 'Chest Dip',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '432',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BWChestDipBenchesBentKnee',
		name: 'Chest Dip (bent knees between benches)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '433',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BWChestDipBenches',
		name: 'Chest Dip (between benches)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '434',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/BWUnderhandChinup',
		name: 'Chin-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '435',
		url: 'https://exrx.net/WeightExercises/Triceps/BWCloseGripDeclinePushup',
		name: 'Close Grip Decline Pushup',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Pectoralis Major, Clavicular', 'Pectoralis Major, Sternal', 'Deltoid, Anterior']
		},
		mechanics: 'Compound'
	},
	{
		id: '436',
		url: 'https://exrx.net/WeightExercises/Triceps/BWCloseGripInclinePushupBar',
		name: 'Close Grip Incline Push-up (on bar)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular', 'Deltoid, Anterior']
		},
		mechanics: 'Compound'
	},
	{
		id: '437',
		url: 'https://exrx.net/WeightExercises/Triceps/BWCloseGripPushup',
		name: 'Close Grip Push-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular', 'Deltoid, Anterior']
		},
		mechanics: 'Compound'
	},
	{
		id: '438',
		url: 'https://exrx.net/WeightExercises/Triceps/BWCloseGripPushupKnees',
		name: 'Close Grip Push-up (on knees)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular', 'Deltoid, Anterior']
		},
		mechanics: 'Compound'
	},
	{
		id: '439',
		url: 'https://exrx.net/WeightExercises/Triceps/BWCloseGripPushupMB',
		name: 'Close Grip Push-up (on medicine ball)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular', 'Deltoid, Anterior']
		},
		mechanics: 'Compound'
	},
	{
		id: '440',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/ContraLateralSuperman',
		name: 'Contralateral Superman',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Trapezius, Lower', 'Trapezius, Middle']
		},
		mechanics: 'Isolated'
	},
	{
		id: '441',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWCrunch',
		name: 'Crunch',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '442',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWCrunchX',
		name: 'Crunch (arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '443',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWCrunchAD',
		name: 'Crunch (arms down)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '444',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWBallCrunchX',
		name: 'Crunch (on stability ball, arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '445',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWCrunchUp',
		name: 'Crunch Up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '446',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/BWDeclinePushup',
		name: 'Decline Push-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '447',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/BWDeclinePushupOnBall',
		name: 'Decline Push-up (on stability ball)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '448',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/RearDeclinePlank',
		name: 'Decline Rear Bridge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '449',
		url: 'https://exrx.net/WeightExercises/Obliques/DB45SideBend',
		name: 'Dumbbell 45° Side Bend',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '450',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBAlternatingFrontRaise',
		name: 'Dumbbell Alternating Front Raise',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '451',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBAlternatingFullCanSeatedFrontRaise',
		name: 'Dumbbell Alternating Full Can Seated Front Raise',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '452',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBAlternInclineFrontRaise',
		name: 'Dumbbell Alternating Incline Front Raise',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '453',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBAlternatingSeatedFrontRaise',
		name: 'Dumbbell Alternating Seated Front Raise',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '454',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBSideLunge',
		name: 'Dumbbell Alternating Side Lunge',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus (lead leg)', 'Adductors (extended leg)', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '455',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBSideLunge',
		name: 'Dumbbell Alternating Side Lunge',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus (lead leg)',
				'Adductors (extended leg)',
				'Soleus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '456',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBArnoldPress',
		name: 'Dumbbell Arnold Press',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '457',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/DBBenchPress',
		name: 'Dumbbell Bench Press',
		equipment: ['Dumbbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '458',
		url: 'https://exrx.net/WeightExercises/BackGeneral/DBBentOverRow',
		name: 'Dumbbell Bent-over Row',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '459',
		url: 'https://exrx.net/WeightExercises/Brachialis/DBConcentrationCurl',
		name: 'Dumbbell Concentration Curl',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '460',
		url: 'https://exrx.net/WeightExercises/Biceps/DBCurl',
		name: 'Dumbbell Curl',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '461',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/DBDeclineBenchPress',
		name: 'Dumbbell Decline Bench Press',
		equipment: ['Dumbbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '462',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/DBDeclineFly',
		name: 'Dumbbell Decline Fly',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Biceps Brachii, Short Head'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '463',
		url: 'https://exrx.net/WeightExercises/Triceps/DBDeclineTriExt',
		name: 'Dumbbell Decline Triceps Extension',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '464',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/DBFly',
		name: 'Dumbbell Fly',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Biceps Brachii, Short Head'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '465',
		url: 'https://exrx.net/WeightExercises/Supraspinatus/DBFrontLateralRaise',
		name: 'Dumbbell Front Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Supraspinatus',
			target: ['Supraspinatus'],
			synergists: [
				'Deltoid, Lateral',
				'Deltoid, Anterior',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '466',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBFrontRaise',
		name: 'Dumbbell Front Raise',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '467',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBFrontSquat',
		name: 'Dumbbell Front Squat',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '468',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBFrontSquat',
		name: 'Dumbbell Front Squat',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '469',
		url: 'https://exrx.net/WeightExercises/Supraspinatus/DBFullCanLateralRaise',
		name: 'Dumbbell Full Can Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Supraspinatus',
			target: ['Supraspinatus'],
			synergists: [
				'Deltoid, Lateral',
				'Deltoid, Anterior',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '470',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBFullCanSeatedFrontRaise',
		name: 'Dumbbell Full Can Seated Front Raise',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '471',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/DBHammerCurl',
		name: 'Dumbbell Hammer Curl',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '472',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/DBInclineBenchPress',
		name: 'Dumbbell Incline Bench Press',
		equipment: ['Dumbbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '473',
		url: 'https://exrx.net/WeightExercises/Biceps/DBInclineCurl',
		name: 'Dumbbell Incline Curl',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '474',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/DBInclineFly',
		name: 'Dumbbell Incline Fly',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Biceps Brachii, Short Head']
		},
		mechanics: 'Isolated'
	},
	{
		id: '475',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBInclineLateralRaise',
		name: 'Dumbbell Incline Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Posterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '476',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/DBInclineRearDeltRow',
		name: 'Dumbbell Incline Rear Delt Row',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '477',
		url: 'https://exrx.net/WeightExercises/BackGeneral/DBInclineRow',
		name: 'Dumbbell Incline Row',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '478',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/DBInclineExternalRotation',
		name: 'Dumbbell Incline Shoulder External Rotation',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Infraspinatus'],
			synergists: ['Teres Minor', 'Deltoid, Posterior']
		},
		mechanics: 'Isolated'
	},
	{
		id: '479',
		url: 'https://exrx.net/WeightExercises/SerratusAnterior/DBInclineShoulderRaise',
		name: 'Dumbbell Incline Shoulder Raise',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Serratus',
			target: ['Serratus Anterior'],
			synergists: ['Pectoralis Major, Clavicular']
		},
		mechanics: 'Isolated'
	},
	{
		id: '480',
		url: 'https://exrx.net/WeightExercises/Triceps/DBInclineTricepsExt',
		name: 'Dumbbell Incline Triceps Extension',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '481',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBInclineYRaise',
		name: 'Dumbbell Incline Y Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Supraspinatus',
				'Teres Minor',
				'Infraspinatus',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Serratus Anterior, Inferior Digitations',
				'Deltoid, Anterior',
				'Deltoid, Posterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '482',
		url: 'https://exrx.net/WeightExercises/Triceps/DBKickback',
		name: 'Dumbbell Kickback',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '483',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBLateralRaise',
		name: 'Dumbbell Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '484',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBLateralStepUp',
		name: 'Dumbbell Lateral Step-up',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (Following Leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '485',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBLateralStepUp',
		name: 'Dumbbell Lateral Step-up',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (following leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '486',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBLunge',
		name: 'Dumbbell Lunge',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '487',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBLunge',
		name: 'Dumbbell Lunge',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '488',
		url: 'https://exrx.net/WeightExercises/HipAbductor/DBLyingHipAbduction',
		name: 'Dumbbell Lying Hip Abduction',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Abductors (listed below)'],
			synergists: ['Tensor Fasciae Latae', 'Gluteus Medius', 'Gluteus Minimus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '489',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBLyingLateralRaise',
		name: 'Dumbbell Lying Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Posterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '490',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/DBOneArmRearLateralRaise',
		name: 'Dumbbell Lying One Arm Rear Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Supraspinatus',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '491',
		url: 'https://exrx.net/WeightExercises/Pronators/DBLyingPronationDown',
		name: 'Dumbbell Lying Pronation (arm down)',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Pronators',
			target: ['Pronators'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '492',
		url: 'https://exrx.net/WeightExercises/Pronators/DBLyingPronationUp',
		name: 'Dumbbell Lying Pronation (arm up)',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Pronators',
			target: ['Pronators'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '493',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/DBLyingRearDeltRow',
		name: 'Dumbbell Lying Rear Delt Row',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '494',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/DBLyingRearLateralRaise',
		name: 'Dumbbell Lying Rear Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '495',
		url: 'https://exrx.net/WeightExercises/BackGeneral/DBLyingRow',
		name: 'Dumbbell Lying Row',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '496',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/DBLyingExternalRotation',
		name: 'Dumbbell Lying Shoulder External Rotation',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Infraspinatus'],
			synergists: ['Teres Minor', 'Deltoid, Posterior']
		},
		mechanics: 'Isolated'
	},
	{
		id: '497',
		url: 'https://exrx.net/WeightExercises/Supinators/DBLyingSupinationUp',
		name: 'Dumbbell Lying Supination',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Supinators',
			target: ['Supinator'],
			synergists: ['Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '498',
		url: 'https://exrx.net/WeightExercises/Supinators/DBLyingSupinationDown',
		name: 'Dumbbell Lying Supination (arm down)',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Supinators',
			target: ['Supinator'],
			synergists: ['Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '499',
		url: 'https://exrx.net/WeightExercises/Triceps/DBLyingTriExt',
		name: 'Dumbbell Lying Triceps Extension',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '500',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBOneArmLateralRaise',
		name: 'Dumbbell One Arm Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '501',
		url: 'https://exrx.net/WeightExercises/Triceps/DBOneArmReclinedTricepsExtension',
		name: 'Dumbbell One Arm Reclined Triceps Extension',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '502',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBOneArmSeatedLateralRaise',
		name: 'Dumbbell One Arm Seated Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '503',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBOneArmShoulderPress',
		name: 'Dumbbell One Arm Shoulder Press',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Pectoralis Major, Clavicular',
				'Obliques',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '504',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/DBOneArmStraightLegDeadlift',
		name: 'Dumbbell One Arm Straight Leg Deadlift',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: [
				'Obliques',
				'Quadratus lumborum',
				'Hamstrings',
				'Gluteus Maximus',
				'Adductor Magnus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '505',
		url: 'https://exrx.net/WeightExercises/Triceps/DBOneArmTriExt',
		name: 'Dumbbell One Arm Triceps Extension',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '506',
		url: 'https://exrx.net/WeightExercises/Triceps/DBOneArmTriExtBench',
		name: 'Dumbbell One Arm Triceps Extension (on bench)',
		equipment: ['Dumbbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '507',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBOneArmUprightRow',
		name: 'Dumbbell One Arm Upright Row',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '508',
		url: 'https://exrx.net/WeightExercises/Brachialis/DBPreacherCurl',
		name: 'Dumbbell Preacher Curl',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '509',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/DBProneExternalRotation',
		name: 'Dumbbell Prone External Rotation',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Infraspinatus'],
			synergists: ['Teres Minor', 'Deltoid, Posterior']
		},
		mechanics: 'Isolated'
	},
	{
		id: '510',
		url: 'https://exrx.net/WeightExercises/Brachialis/DBProneInclineCurl',
		name: 'Dumbbell Prone Incline Curl',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '511',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/DBProneInclineExternalRotation',
		name: 'Dumbbell Prone Incline External Rotation',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Infraspinatus'],
			synergists: ['Teres Minor', 'Deltoid, Posterior']
		},
		mechanics: 'Isolated'
	},
	{
		id: '512',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/DBPullover',
		name: 'Dumbbell Pullover',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Latissimus Dorsi',
				'Teres Major',
				'Triceps, Long Head',
				'Deltoid, Posterior',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '513',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/DBPulloverAp',
		name: 'Dumbbell Pullover (on apparatus)',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Latissimus Dorsi',
				'Teres Major',
				'Triceps, Long Head',
				'Deltoid, Posterior',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '514',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/DBPulloverArchedBench',
		name: 'Dumbbell Pullover (on arched bench)',
		equipment: ['Dumbbell', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Latissimus Dorsi',
				'Teres Major',
				'Triceps, Long Head',
				'Deltoid, Posterior',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '515',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/DBPushCrunch',
		name: 'Dumbbell Push Crunch',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '516',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/DBPushSitUp',
		name: 'Dumbbell Push Sit-up',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '517',
		url: 'https://exrx.net/WeightExercises/WristExtensors/DBRadialFlexion',
		name: 'Dumbbell Radial Deviation',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Extensor Carpi Radialis', 'Flexor Carpi Radialis'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '518',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBRaises',
		name: 'Dumbbell Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Posterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '519',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/DBRearDeltRow',
		name: 'Dumbbell Rear Delt Row',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Brachialis',
				'Brachioradialis',
				'Rhomboids'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '520',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/DBRearLateralRaise',
		name: 'Dumbbell Rear Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '521',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBRearLunge',
		name: 'Dumbbell Rear Lunge',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '522',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBRearLunge',
		name: 'Dumbbell Rear Lunge',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '523',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBReclinedShoulderPress',
		name: 'Dumbbell Reclined Shoulder Press',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Pectoralis Major, Clavicular'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '524',
		url: 'https://exrx.net/WeightExercises/Triceps/DBReclinedTricepsExtension',
		name: 'Dumbbell Reclined Triceps Extension',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '525',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/DBReverseCalfRaise',
		name: 'Dumbbell Reverse Calf Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '526',
		url: 'https://exrx.net/WeightExercises/WristExtensors/DBReverseWristCurl',
		name: 'Dumbbell Reverse Wrist Curl',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Wrist Extensors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '527',
		url: 'https://exrx.net/WeightExercises/Obliques/DBRussianTwistBall',
		name: 'Dumbbell Russian Twist (on stability ball)',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Hip External Rotators',
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '528',
		url: 'https://exrx.net/WeightExercises/Biceps/DBSeatedCurl',
		name: 'Dumbbell Seated Curl',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '529',
		url: 'https://exrx.net/WeightExercises/Supraspinatus/DBFrontLateralRaiseSeated',
		name: 'Dumbbell Seated Front Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Supraspinatus',
			target: ['Supraspinatus'],
			synergists: [
				'Deltoid, Lateral',
				'Deltoid, Anterior',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '530',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBSeatedFrontRaise',
		name: 'Dumbbell Seated Front Raise',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '531',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBSeatedLateralRaise',
		name: 'Dumbbell Seated Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '532',
		url: 'https://exrx.net/WeightExercises/Pronators/DBSeatedPronation',
		name: 'Dumbbell Seated Pronation',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Pronators',
			target: ['Pronators'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '533',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/DBSeatedRearLateralRaise',
		name: 'Dumbbell Seated Rear Lateral Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '534',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/DBSeatedExternalRotation',
		name: 'Dumbbell Seated Shoulder External Rotation',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Teres Minor'],
			synergists: ['Infraspinatus', 'Deltoid, Posterior']
		},
		mechanics: 'Isolated'
	},
	{
		id: '535',
		url: 'https://exrx.net/WeightExercises/Supinators/DBSeatedSupination',
		name: 'Dumbbell Seated Supination',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Supinators',
			target: ['Supinator'],
			synergists: ['Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '536',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBSeatedUprightRow',
		name: 'Dumbbell Seated Upright Row',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '537',
		url: 'https://exrx.net/WeightExercises/Subscapularis/DBInternalRotation',
		name: 'Dumbbell Shoulder Internal Rotation (on bench)',
		equipment: ['Dumbbell', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Internal Rotators',
			target: ['Subscapularis'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '538',
		url: 'https://exrx.net/WeightExercises/Subscapularis/DBInternalRotationFloor',
		name: 'Dumbbell Shoulder Internal Rotation (on floor)',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Internal Rotators',
			target: ['Subscapularis'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '539',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/DBShoulderPress',
		name: 'Dumbbell Shoulder Press',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Pectoralis Major, Clavicular'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '540',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/DBShrug',
		name: 'Dumbbell Shrug',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '541',
		url: 'https://exrx.net/WeightExercises/Obliques/DBSideBend',
		name: 'Dumbbell Side Bend',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '542',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBSideLunge2',
		name: 'Dumbbell Side Lunge',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus (lead leg)', 'Adductors (extended leg)', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '543',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBSideLunge2',
		name: 'Dumbbell Side Lunge',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus (lead leg)',
				'Adductors (extended leg)',
				'Soleus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '544',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/DBLyingRearDeltRaise',
		name: 'Dumbbell Side Lying Rear Delt Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '545',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/DBSingleLegCalfRaise',
		name: 'Dumbbell Single Leg Calf Raise',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '546',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/DBSingleLegRevCalfRaise',
		name: 'Dumbbell Single Leg Reverse Calf Raise',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '547',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBSingleLegSplitSquat',
		name: 'Dumbbell Single Leg Split Squat',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '548',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBSingleLegSplitSquat',
		name: 'Dumbbell Single Leg Split Squat',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '549',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBSingleLegSquat',
		name: 'Dumbbell Single Leg Squat',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '550',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBSingleLegSquat',
		name: 'Dumbbell Single Leg Squat',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '551',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBSplitSquat',
		name: 'Dumbbell Split Squat',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '552',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBSplitSquat',
		name: 'Dumbbell Split Squat',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '553',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBSquat',
		name: 'Dumbbell Squat',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '554',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBSquat',
		name: 'Dumbbell Squat',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '555',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/DBStandingCalfRaise',
		name: 'Dumbbell Standing Calf Raise',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '556',
		url: 'https://exrx.net/WeightExercises/Brachialis/DBStandingPreacherCurl',
		name: 'Dumbbell Standing Preacher Curl',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '557',
		url: 'https://exrx.net/WeightExercises/Brachialis/DBStandingPreacherCurlInclineBench',
		name: 'Dumbbell Standing Preacher Curl (on incline bench)',
		equipment: ['Dumbbell', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '558',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBStepDown',
		name: 'Dumbbell Step Down',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (Following Leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '559',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBStepDown',
		name: 'Dumbbell Step Down',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (following leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '560',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBStepUp',
		name: 'Dumbbell Step-up',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (Second Leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '561',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBStepUp',
		name: 'Dumbbell Step-up',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (second leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '562',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/DBStraightLegDeadlift',
		name: 'Dumbbell Straight Leg Deadlift',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Hamstrings', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '563',
		url: 'https://exrx.net/WeightExercises/Hamstrings/DBStraightLegDeadlift',
		name: 'Dumbbell Straight Leg Deadlift',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Erector Spinae', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '564',
		url: 'https://exrx.net/WeightExercises/Hamstrings/DBStrBackStrLegDeadlift',
		name: 'Dumbbell Straight-back Straight-leg Deadlift',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '565',
		url: 'https://exrx.net/WeightExercises/Subscapularis/DBSupineInternalRotation',
		name: 'Dumbbell Supine Shoulder Internal Rotation (on bench with shoulder abducted)',
		equipment: ['Dumbbell', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Internal Rotators',
			target: ['Subscapularis'],
			synergists: ['Pectoralis Major, Sternal']
		},
		mechanics: 'Isolated'
	},
	{
		id: '566',
		url: 'https://exrx.net/WeightExercises/Triceps/DBTriExt',
		name: 'Dumbbell Triceps Extension',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '567',
		url: 'https://exrx.net/WeightExercises/Other/DBTurkishGetUp',
		name: 'Dumbbell Turkish Get-up',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Miscellaneous',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '568',
		url: 'https://exrx.net/WeightExercises/WristFlexors/DBUlnarFlexion',
		name: 'Dumbbell Ulnar Deviation',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Flexor Carpi Ulnaris', 'Extensor Carpi Ulnaris'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '569',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/DBUprightRow',
		name: 'Dumbbell Upright Row',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '570',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/DBUprightExternalRotation',
		name: 'Dumbbell Upright Shoulder External Rotation',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Teres Minor'],
			synergists: ['Infraspinatus', 'Deltoid, Posterior', 'Supraspinatus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '571',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/DBUprightExternalRotationSupport',
		name: 'Dumbbell Upright Shoulder External Rotation (with support)',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Teres Minor'],
			synergists: ['Infraspinatus', 'Deltoid, Posterior', 'Supraspinatus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '572',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBWalkingLunge',
		name: 'Dumbbell Walking Lunge',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '573',
		url: 'https://exrx.net/WeightExercises/Quadriceps/DBWalkingLunge',
		name: 'Dumbbell Walking Lunge',
		equipment: ['Dumbbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '574',
		url: 'https://exrx.net/WeightExercises/WristFlexors/DBWristCurl',
		name: 'Dumbbell Wrist Curl',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '575',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/DBSingleLegStiffLegDeadlift',
		name: 'Dumbell Single Leg Stiff-leg Deadlift',
		equipment: ['Dumbbell'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus (supporting leg)'],
			synergists: ['Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '576',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BWDeclinePikePress',
		name: 'Elevated Pike Press',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '577',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/BWFrontNeckBridge',
		name: 'Front Neck Bridge',
		equipment: ['Bodyweight'],
		force: ['Push', 'Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: [
				'Splenius',
				'Trapezius, Upper',
				'Levator Scapulae',
				'Erector Spinae, Cervicis & Capitis Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '578',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWFrontPlank',
		name: 'Front Plank',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Abs',
			target: [],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '579',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWGluteHamRaiseHips',
		name: 'Glute-Ham Raise (hands behind hips)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Gastrocnemius',
				'Gracilis',
				'Sartorius',
				'Popliteus'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '580',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWGluteHamRaiseHead',
		name: 'Glute-Ham Raise (hands behind neck)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Gastrocnemius',
				'Gracilis',
				'Sartorius',
				'Popliteus'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '581',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWHalfSquat',
		name: 'Half Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '582',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWHalfSquat',
		name: 'Half Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '583',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BWHandstandPressBench',
		name: 'Handstand Push-up (between benches)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '584',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BWHandstandPushupParallettes',
		name: 'Handstand Push-up (on parallettes)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '585',
		url: 'https://exrx.net/WeightExercises/OlympicLifts/HangClean',
		name: 'Hang Clean',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Weightlifts',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '586',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWHangingHamstringBridge',
		name: 'Hanging Hamstring Bridge',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Latissimus Dorsi',
				'Pectoralis Major, Sternal',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '587',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWHangingHamstringBridgeCurl',
		name: 'Hanging Hamstring Bridge Curl',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Latissimus Dorsi',
				'Pectoralis Major, Sternal',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor',
				'Gastrocnemius',
				'Sartorius',
				'Gracilis',
				'Popliteus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '588',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWHangingHyperextension',
		name: 'Hanging Hyperextension',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: [
				'Hamstrings',
				'Gluteus Maximus',
				'Adductor Magnus',
				'Latissimus Dorsi',
				'Pectoralis Major, Sternal',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '589',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWHangingLegCurl',
		name: 'Hanging Leg Curl',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '590',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWHangingLegRaise',
		name: 'Hanging Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '591',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWHangingLegRaiseAbStrap',
		name: 'Hanging Leg Raise (with ab straps)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '592',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWHangingLegHipRaise',
		name: 'Hanging Leg-Hip Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '593',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWHangingLegHipRaiseAbStrap',
		name: 'Hanging Leg-Hip Raise (with ab straps)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '594',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWHangingStraightHipLegCurl',
		name: 'Hanging Straight Hip Leg Curl',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '595',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWHangingStraightLegRaise',
		name: 'Hanging Straight Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '596',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWHangingStraightLegHipRaise',
		name: 'Hanging Straight Leg-Hip Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis',
				'Rectus Femoris',
				'Obliques',
				'Quadriceps'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '597',
		url: 'https://exrx.net/WeightExercises/Obliques/BWHangingTwistingLegHipRaise',
		name: 'Hanging Twisting Leg Hip Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Rectus Abdominis',
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '598',
		url: 'https://exrx.net/WeightExercises/Obliques/BWHangingTwistingLegRaise',
		name: 'Hanging Twisting Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '599',
		url: 'https://exrx.net/WeightExercises/Obliques/BWWindshieldWiper',
		name: 'Hanging Windshield Wiper',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '600',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWHyperextensionX',
		name: 'Hyperextension (arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '601',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWHyperextensionHips',
		name: 'Hyperextension (hands behind hips)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '602',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BWHyperextensionHead',
		name: 'Hyperextension (hands on head)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '603',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWInclineCrunch',
		name: 'Incline Crunch',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '604',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWInclineCrunchX',
		name: 'Incline Crunch (arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '605',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWInclineCrunchDown',
		name: 'Incline Crunch (arms down)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '606',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWInclineLegRaise',
		name: 'Incline Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '607',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWInclineLegRaiseArmPads',
		name: 'Incline Leg Raise (arms on pads)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '608',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWInclineLegHipRaise',
		name: 'Incline Leg-Hip Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '609',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BWInclinePushup',
		name: 'Incline Push-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '610',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BWInclinePushupBar',
		name: 'Incline Push-up (on bar)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '611',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/RearInclinePlank',
		name: 'Incline Rear Bridge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '612',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWInclineSitUp',
		name: 'Incline Sit-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '613',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWInclineSitUpX',
		name: 'Incline Sit-up (arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '614',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWInclineStraightLegRaise',
		name: 'Incline Straight Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '615',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWInclineStraightLegRaiseArmPads',
		name: 'Incline Straight Leg Raise (arms on pads)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '616',
		url: 'https://exrx.net/WeightExercises/Obliques/BWInclineTwistingCrunch',
		name: 'Incline Twisting Crunch',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis', 'Psoas Major']
		},
		mechanics: 'Isolated'
	},
	{
		id: '617',
		url: 'https://exrx.net/WeightExercises/Obliques/BWInclineTwistingCrunchX',
		name: 'Incline Twisting Crunch (arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis', 'Psoas Major']
		},
		mechanics: 'Isolated'
	},
	{
		id: '618',
		url: 'https://exrx.net/WeightExercises/Obliques/BWInclineTwistingSitUp',
		name: 'Incline Twisting Sit-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Rectus Abdominis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '619',
		url: 'https://exrx.net/WeightExercises/Obliques/BWInclineTwistingSitUpX',
		name: 'Incline Twisting Sit-up (arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Rectus Abdominis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '620',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWHamstringRaise',
		name: 'Inverse Leg Curl',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '621',
		url: 'https://exrx.net/WeightExercises/BackGeneral/BWSupineRow',
		name: 'Inverted Row',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '622',
		url: 'https://exrx.net/WeightExercises/BackGeneral/BWSupineRowFeetElevated',
		name: 'Inverted Row (feet elevated)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '623',
		url: 'https://exrx.net/WeightExercises/BackGeneral/BWSupineRowHigh',
		name: 'Inverted Row (high bar)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '624',
		url: 'https://exrx.net/WeightExercises/BackGeneral/BWSupineRowHips',
		name: 'Inverted Row (on hips)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '625',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/BWInvertedShrugPB',
		name: 'Inverted Shrug (on parallel bars)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '626',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWInvertedSitup',
		name: 'Inverted Sit-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '627',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWJackKnifeBall',
		name: 'Jack-knife on Ball',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis',
				'Gluteus Maximus',
				'Adductor Magnus'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '628',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWJackKnifeWheel',
		name: 'Jack-knife on Power Wheel',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis',
				'Gluteus Maximus',
				'Adductor Magnus'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '629',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtJackKnifeSitUp',
		name: 'Jack-knife Sit-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '630',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtJackKnifeSitUpBench',
		name: 'Jack-knife Sit-up (on bench)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '631',
		url: 'https://exrx.net/WeightExercises/Kettlebell/KBFrontSquat',
		name: 'Kettlebell Front Squat',
		equipment: ['Kettlebell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '632',
		url: 'https://exrx.net/WeightExercises/Kettlebell/KBOverheadRearLunge',
		name: 'Kettlebell Overhead Rear Lunge',
		equipment: ['Kettlebell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '633',
		url: 'https://exrx.net/WeightExercises/Kettlebell/KBOverheadSplitSquat',
		name: 'Kettlebell Overhead Split Squat',
		equipment: ['Kettlebell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '634',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWLateralStepUp',
		name: 'Lateral Step-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (Following Leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '635',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWLateralStepUp',
		name: 'Lateral Step-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (following leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '636',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWBallLegCurl',
		name: 'Leg Curl (on ball)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '637',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWWheelLegCurl',
		name: 'Leg Curl (on power wheel)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '638',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWLegHipRaiseExBall',
		name: 'Leg-Hip Raise (on stability ball)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '639',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LV45CalfPress',
		name: 'Lever 45° Calf Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '640',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LV45CalfRaise',
		name: 'Lever 45° Calf Raise',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '641',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LV45CalfRaisePL',
		name: 'Lever 45° Calf Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '642',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LV45LegPress',
		name: 'Lever 45° Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '643',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LV45LegPress',
		name: 'Lever 45° Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '644',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LV45ReverseCalfPress',
		name: 'Lever 45° Reverse Calf Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '645',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LV45ReverseCalfRaise',
		name: 'Lever 45° Reverse Calf Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '646',
		url: 'https://exrx.net/WeightExercises/Soleus/LVAltBentKneeSeatedCalfExt',
		name: 'Lever Alternating Bent-knee Seated Calf Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Inner Calf',
			target: ['Soleus'],
			synergists: ['Quadriceps', 'Gluteus Maximus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '647',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVAlternationgBentOverLegCurl',
		name: 'Lever Alternating Bent-over Leg Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '648',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVAlternatingSeatedCalfExt',
		name: 'Lever Alternating Calf Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '649',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVAlternatingChestPress',
		name: 'Lever Alternating Chest Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '650',
		url: 'https://exrx.net/WeightExercises/Biceps/LVAlternatingCurl',
		name: 'Lever Alternating Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '651',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVAlternatingDeclineChestPress',
		name: 'Lever Alternating Decline Chest Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '652',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVAlternatingInclineChestPress',
		name: 'Lever Alternating Incline Chest Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '653',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVAlternatingKneelingHipExtRoll',
		name: 'Lever Alternating Kneeling Hip Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '654',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVAlternatingLegExtension',
		name: 'Lever Alternating Leg Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '655',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVAlternatingLegExtensionH',
		name: 'Lever Alternating Leg Extension (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '656',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVAlternatingLegExtensionUnilateral',
		name: 'Lever Alternating Leg Extension (unilateral machine)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '657',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVAlternatingLyingHipExtension',
		name: 'Lever Alternating Lying Hip Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '658',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVAlternatingLyingLegCurl',
		name: 'Lever Alternating Lying Leg Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '659',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVAlternatingLyingLegCurlH',
		name: 'Lever Alternating Lying Leg Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '660',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVAlternatingLyingLegCurlPL',
		name: 'Lever Alternating Lying Leg Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '661',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVAlternatingLyingLegPress',
		name: 'Lever Alternating Lying Leg Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '662',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVAlternatingLyingLegPress',
		name: 'Lever Alternating Lying Leg Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '663',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVAlternatingNarrowGripSeatedRow',
		name: 'Lever Alternating Narrow Grip Seated Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '664',
		url: 'https://exrx.net/WeightExercises/Brachialis/LVAlterPreacherCurlHighPL',
		name: 'Lever Alternating Preacher Curl (arms high, plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '665',
		url: 'https://exrx.net/WeightExercises/Brachialis/LVAlterPreacherCurlHigh',
		name: 'Lever Alternating Preacher Curl (arms high)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '666',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVAlternatingSeatedHighRow',
		name: 'Lever Alternating Seated High Row',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '667',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVAlternatingLegPress',
		name: 'Lever Alternating Seated Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '668',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVAlternatingLegPress',
		name: 'Lever Alternating Seated Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '669',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVAlternatingShoulderPress',
		name: 'Lever Alternating Shoulder Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '670',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVAlternatingSingleLegSplitVSquat',
		name: 'Lever Alternating Single Leg Split V-Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '671',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVAlternatingSingleLegSplitVSquat',
		name: 'Lever Alternating Single Leg Split V-Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '672',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVAlternatingStandingLegCurl',
		name: 'Lever Alternating Standing Leg Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '673',
		url: 'https://exrx.net/WeightExercises/Triceps/LVAltTriExt',
		name: 'Lever Alternating Triceps Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '674',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVAltUnderhandPulldownS',
		name: 'Lever Alternating Underhand Pulldown',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '675',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVAlternatingSeatedUnderhandRow',
		name: 'Lever Alternating Underhand Seated Row',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '676',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVAlternatingSeatedUnderhandRowH',
		name: 'Lever Alternating Underhand Seated Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '677',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVAlternatingWideGripSeatedRow',
		name: 'Lever Alternating Wide Grip Seated Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '678',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/LVBackExtensionN',
		name: 'Lever Back Extension',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '679',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/LVBackExtension',
		name: 'Lever Back Extension',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '680',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/LVBackExtensionMedEx',
		name: 'Lever Back Extension',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '681',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVBBBehindNeckPress',
		name: 'Lever Barbell Behind Neck Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '682',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVBBBenchPress',
		name: 'Lever Barbell Bench Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '683',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVBBBentOverRow',
		name: 'Lever Barbell Bent-over Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '684',
		url: 'https://exrx.net/WeightExercises/Triceps/LVBBCloseGripBenchPress',
		name: 'Lever Barbell Close Grip Bench Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Deltoid, Anterior', 'Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular']
		},
		mechanics: 'Compound'
	},
	{
		id: '685',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVBBInclineBenchPress',
		name: 'Lever Barbell Incline Bench Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '686',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVBBRearLunge',
		name: 'Lever Barbell Rear Lunge (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '687',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVBBRearLunge',
		name: 'Lever Barbell Rear Lunge (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '688',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVBBShoulderPress',
		name: 'Lever Barbell Shoulder Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '689',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/LVBBShrug',
		name: 'Lever Barbell Shrug (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '690',
		url: 'https://exrx.net/WeightExercises/Obliques/LVBBSideBend',
		name: 'Lever Barbell Side Bend (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '691',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVBBSingleLegSplitSquat',
		name: 'Lever Barbell Single Leg Split Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '692',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVBBSingleLegSplitSquat',
		name: 'Lever Barbell Single Leg Split Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '693',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVBBSplitSquat',
		name: 'Lever Barbell Split Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '694',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVBBSplitSquat',
		name: 'Lever Barbell Split Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '695',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVBBSquat',
		name: 'Lever Barbell Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '696',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVBBSquat',
		name: 'Lever Barbell Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '697',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/LVBBUprightRow',
		name: 'Lever Barbell Upright Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '698',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVBehindNeckPressH',
		name: 'Lever Behind Neck Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '699',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVBenchPress',
		name: 'Lever Bench Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '700',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVBenchPressH',
		name: 'Lever Bench Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '701',
		url: 'https://exrx.net/WeightExercises/Soleus/LVBentKneeSeatedCalfExtension',
		name: 'Lever Bent Knee Calf Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Inner Calf',
			target: ['Soleus'],
			synergists: ['Gastrocnemius']
		},
		mechanics: 'Isolated'
	},
	{
		id: '702',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVBentoverFlyIronCross',
		name: 'Lever Bent-over Fly (on iron cross machine)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Pectoralis Minor', 'Biceps Brachii, Short Head']
		},
		mechanics: 'Isolated'
	},
	{
		id: '703',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVBentOverRearKick',
		name: 'Lever Bent-over Glute Kickback',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus', 'Quadriceps']
		},
		mechanics: 'Compound'
	},
	{
		id: '704',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVBentOverRearKickPL',
		name: 'Lever Bent-over Glute Kickback (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus', 'Quadriceps']
		},
		mechanics: 'Compound'
	},
	{
		id: '705',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVBentOverHipExtension',
		name: 'Lever Bent-over Hip Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '706',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVBentOverLegCurl',
		name: 'Lever Bent-over Leg Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '707',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVBentOverRowH',
		name: 'Lever Bent-over Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['General, Back'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '708',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVSeatedCalfExtension',
		name: 'Lever Calf Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '709',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVSeatedCalfExtensionBi',
		name: 'Lever Calf Extension (bilateral)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '710',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVSeatedCalfExtensionHammer',
		name: 'Lever Calf Extension (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '711',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVVCalfRaiseH',
		name: 'Lever Calf Raise (on v-squat machine, plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '712',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVChestDip2',
		name: 'Lever Chest Dip',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '713',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVChestDip',
		name: 'Lever Chest Dip',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '714',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVChestDipH',
		name: 'Lever Chest Dip (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '715',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVChestPressS',
		name: 'Lever Chest Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '716',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVChestPress',
		name: 'Lever Chest Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '717',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVChestPressH',
		name: 'Lever Chest Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '718',
		url: 'https://exrx.net/WeightExercises/Triceps/LVCloseGripBenchPressH',
		name: 'Lever Close Grip Bench Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Deltoid, Anterior', 'Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular']
		},
		mechanics: 'Compound'
	},
	{
		id: '719',
		url: 'https://exrx.net/WeightExercises/Triceps/LVCloseGripInclineBenchPress',
		name: 'Lever Close Grip Incline Bench Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Deltoid, Anterior', 'Pectoralis Major, Clavicular']
		},
		mechanics: 'Compound'
	},
	{
		id: '720',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVCloseGripInclineRow',
		name: 'Lever Close Grip Incline Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '721',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVCloseGripPulldown2',
		name: 'Lever Close Grip Pulldown',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '722',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVCloseGripPulldown',
		name: 'Lever Close Grip Pulldown',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '723',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVCloseGripPulldownPL',
		name: 'Lever Close Grip Pulldown (plate-loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '724',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVCloseGripTBarRowLM',
		name: 'Lever Close Grip T-bar Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '725',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVCloseGripTBarRow',
		name: 'Lever Close Grip T-bar Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '726',
		url: 'https://exrx.net/WeightExercises/Biceps/LVCurl',
		name: 'Lever Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '727',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVDeadlift',
		name: 'Lever Deadlift (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '728',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/LVDeadlift',
		name: 'Lever Deadlift (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: [],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Quadriceps', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '729',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVDeclineBenchPress',
		name: 'Lever Decline Bench Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '730',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVDeclineChestPress',
		name: 'Lever Decline Chest Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '731',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVDeclineChestPressH',
		name: 'Lever Decline Chest Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '732',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVDeclineChestPressPL',
		name: 'Lever Decline Chest Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '733',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVDeclineFly',
		name: 'Lever Decline Pec Deck Fly',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Pectoralis Minor']
		},
		mechanics: 'Isolated'
	},
	{
		id: '734',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVDonkeyCalfRaise',
		name: 'Lever Donkey Calf Raise',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '735',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVDonkeyCalfRaisePL',
		name: 'Lever Donkey Calf Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '736',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LVDonkeyReverseCalfRaise',
		name: 'Lever Donkey Reverse Calf Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '737',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/LVExtendedArmKneelingLateralRaise',
		name: 'Lever Extended Arm Kneeling Lateral Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '738',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/LVExtendedArmLateralRaise',
		name: 'Lever Extended Arm Lateral Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '739',
		url: 'https://exrx.net/WeightExercises/Supinators/LVSupinationPronation',
		name: 'Lever Forearm Supination/Pronation',
		equipment: ['Machine'],
		force: ['Pull', 'Push'],
		muscles: {
			category: 'Supinators',
			target: ['Forearm Supinators', 'Forearm Pronators'],
			synergists: ['Biceps Brachii (during supination)']
		},
		mechanics: 'Isolated'
	},
	{
		id: '740',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVForwardAngledCalfRaise',
		name: 'Lever Forward Angled Calf Raise',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '741',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVFrontPulldown',
		name: 'Lever Front Pulldown',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '742',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVFrontPulldownPL',
		name: 'Lever Front Pulldown (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '743',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVFrontSquatPL',
		name: 'Lever Front Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '744',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVFrontSquatPL',
		name: 'Lever Front Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '745',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVFullSquatPL',
		name: 'Lever Full Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '746',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVFullSquatPL',
		name: 'Lever Full Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '747',
		url: 'https://exrx.net/WeightExercises/WristFlexors/LVGrip',
		name: 'Lever Grip',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '748',
		url: 'https://exrx.net/WeightExercises/WristFlexors/LVGripPL',
		name: 'Lever Grip (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '749',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/LVXGripShrug',
		name: 'Lever Gripless Shrug',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '750',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/LVXGripShrugPL',
		name: 'Lever Gripless Shrug (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '751',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVHackPress',
		name: 'Lever Hack Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '752',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVHackPress',
		name: 'Lever Hack Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '753',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVHackSquat',
		name: 'Lever Hack Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '754',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVHackSquatPL',
		name: 'Lever Hack Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '755',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/LVHammerPreacherCurl',
		name: 'Lever Hammer Preacher Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '756',
		url: 'https://exrx.net/WeightExercises/HipFlexors/LVHipFlexion',
		name: 'Lever Hip Flexion',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '757',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVHipThrustPL',
		name: 'Lever Hip Thrust',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps']
		},
		mechanics: 'Isolated'
	},
	{
		id: '758',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVHipThrust',
		name: 'Lever Hip Thrust (on lying leg curl machine)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps']
		},
		mechanics: 'Isolated'
	},
	{
		id: '759',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVInclineBenchPress',
		name: 'Lever Incline Bench Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '760',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVInclineBenchPressPL',
		name: 'Lever Incline Bench Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '761',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVInclineChestPress',
		name: 'Lever Incline Chest Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '762',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVInclineChestPressOnHammerMilitaryPress',
		name: 'Lever Incline Chest Press (on Hammer military press)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '763',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVInclineChestPressH',
		name: 'Lever Incline Chest Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '764',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVInclineFly',
		name: 'Lever Incline Fly',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Biceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '765',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVInclineRearDeltRowPL',
		name: 'Lever Incline Rear Delt Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '766',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVInclineRow',
		name: 'Lever Incline Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '767',
		url: 'https://exrx.net/WeightExercises/SerratusAnterior/LVInclineShoulderRaise',
		name: 'Lever Incline Shoulder Raise',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Serratus',
			target: ['Serratus Anterior'],
			synergists: ['Pectoralis Major, Clavicular']
		},
		mechanics: 'Isolated'
	},
	{
		id: '768',
		url: 'https://exrx.net/WeightExercises/SerratusAnterior/LVInclineShoulderRaisePL',
		name: 'Lever Incline Shoulder Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Serratus',
			target: ['Serratus Anterior'],
			synergists: ['Pectoralis Major, Clavicular']
		},
		mechanics: 'Isolated'
	},
	{
		id: '769',
		url: 'https://exrx.net/WeightExercises/Triceps/LVInclineTricepsExtension',
		name: 'Lever Incline Triceps Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '770',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVIronCross',
		name: 'Lever Iron Cross',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '771',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/LVKneelingBackExtension',
		name: 'Lever Kneeling Back Extension',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '772',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVKneelingHipExtension',
		name: 'Lever Kneeling Glute Kickback',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '773',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVKneelingHipExtensionRoller',
		name: 'Lever Kneeling Hip Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '774',
		url: 'https://exrx.net/WeightExercises/HipExternalRotator/LVKneelingHipExternalRotationHipAdductionMach',
		name: 'Lever Kneeling Hip External Rotation (on hip adduction machine)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hip External Rotators',
			target: ['Hip External Rotators (listed below)'],
			synergists: [
				'Gemellus superior',
				'Gemellus inferior',
				'Obturator internus',
				'Obturator externus',
				'Quadratus femoris',
				'Piriformis',
				'Gluteus maximus',
				'Sartorius',
				'Gluteus medius, posterior fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '775',
		url: 'https://exrx.net/WeightExercises/HipAbductor/LVKneelingHipInternalRotationHipAbductionMach',
		name: 'Lever Kneeling Hip Internal Rotation (on hip abduction machine)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Internal Rotators (listed below)'],
			synergists: ['Gluteus Medius', 'Gluteus Minimus', 'Tensor Fasciae Latae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '776',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVKneelingLegCurl',
		name: 'Lever Kneeling Leg Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '777',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVKneelingLegCurlH',
		name: 'Lever Kneeling Leg Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '778',
		url: 'https://exrx.net/WeightExercises/Obliques/LVKneelingTwist',
		name: 'Lever Kneeling Twist',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '779',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/LVNeckLtrFlx',
		name: 'Lever Lateral Neck Flexion',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '780',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/LVLateralNeckFlexionH',
		name: 'Lever Lateral Neck Flexion (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '781',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/LVLateralRaise',
		name: 'Lever Lateral Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '782',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/LVLateralRaise2',
		name: 'Lever Lateral Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '783',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/LVLateralRaiseH',
		name: 'Lever Lateral Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '784',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVLegExtension',
		name: 'Lever Leg Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '785',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVLegExtensionH',
		name: 'Lever Leg Extension (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '786',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVLegExtensionPL',
		name: 'Lever Leg Extension (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '787',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVLyingCrunch',
		name: 'Lever Lying Crunch',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '788',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVLyingCrunchPL',
		name: 'Lever Lying Crunch (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '789',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVLyingFly',
		name: 'Lever Lying Fly',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Deltoid, Anterior',
				'Serratus Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '790',
		url: 'https://exrx.net/WeightExercises/HipAbductor/LVLyingHipAbduction',
		name: 'Lever Lying Hip Abduction',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Abductors (listed below)'],
			synergists: ['Tensor Fasciae Latae', 'Gluteus Medius', 'Gluteus Minimus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '791',
		url: 'https://exrx.net/WeightExercises/HipAdductors/LVLyingHipAdduction',
		name: 'Lever Lying Hip Adduction',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Adductors',
			target: ['Adductors, Hip'],
			synergists: ['Pectineus', 'Gracilis', 'Gluteus Maximus, Lower Fibers']
		},
		mechanics: 'Isolated'
	},
	{
		id: '792',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVLyingHipExtension',
		name: 'Lever Lying Hip Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '793',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVLyingHipExtensionH',
		name: 'Lever Lying Hip Extension (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '794',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVLyingLegCurl',
		name: 'Lever Lying Leg Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '795',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVLyingLegCurlRevHyperMachPL',
		name: 'Lever Lying Leg Curl (on reverse hyper-extension machine, plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '796',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVLyingLegCurlH',
		name: 'Lever Lying Leg Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '797',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVLyingLegCurlPL',
		name: 'Lever Lying Leg Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '798',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVLyingLegPress',
		name: 'Lever Lying Leg Press (custom - plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '799',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVLyingLegPress',
		name: 'Lever Lying Leg Press (custom - plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '800',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVLyingLegPressH',
		name: 'Lever Lying Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '801',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVLyingLegPressH',
		name: 'Lever Lying Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '802',
		url: 'https://exrx.net/WeightExercises/HipFlexors/LVLyingLegRaiseN',
		name: 'Lever Lying Leg Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '803',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVLegRaiseCrunch',
		name: 'Lever Lying Leg Raise Crunch (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Obliques',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '804',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVLyingLegHipRaise',
		name: 'Lever Lying Leg-Hip Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques',
				'Rectus Femoris'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '805',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVLyingRearLateralRaise',
		name: 'Lever Lying Rear Lateral Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '806',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVLyingRearLateralRaiseH',
		name: 'Lever Lying Rear Lateral Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '807',
		url: 'https://exrx.net/WeightExercises/Obliques/LVLyingTwist',
		name: 'Lever Lying Twist',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '808',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVMilitaryPressH',
		name: 'Lever Military Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '809',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVNarrowGripSeatedRowH',
		name: 'Lever Narrow Grip Seated Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '810',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/LVShrugNarrowH',
		name: 'Lever Narrow Grip Shrug (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '811',
		url: 'https://exrx.net/WeightExercises/Splenius/LVNeckExt',
		name: 'Lever Neck Extension',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: [
				'Trapezius, Upper',
				'Levator Scapulae',
				'Erector Spinae, Cervicis & Capitis Fibers',
				'Sternocleidomastoid, Posterior Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '812',
		url: 'https://exrx.net/WeightExercises/Splenius/LVNeckExtentionH',
		name: 'Lever Neck Extension (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: [
				'Trapezius, Upper',
				'Levator Scapulae',
				'Erector Spinae, Cervicis & Capitis Fibers',
				'Sternocleidomastoid, Posterior Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '813',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/LVNeckFlx',
		name: 'Lever Neck Flexion',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '814',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/LVNeckFlexionH',
		name: 'Lever Neck Flexion (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '815',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVOneArmBentOverRow',
		name: 'Lever One Arm Bent-over Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '816',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVFrontRaise',
		name: 'Lever One Arm Front Raise',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '817',
		url: 'https://exrx.net/WeightExercises/Power/LVOneArmJam',
		name: 'Lever One Arm Jammer Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Miscellaneous',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '818',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVOneArmShoulderPress',
		name: 'Lever One Arm Shoulder Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Pectoralis Major, Clavicular'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '819',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVOneArmStandingRow',
		name: 'Lever One Arm Standing Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '820',
		url: 'https://exrx.net/WeightExercises/Triceps/LVOverhandTriDip',
		name: 'Lever Overhand Triceps Dip',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '821',
		url: 'https://exrx.net/WeightExercises/Triceps/LVTricepsExtensionOH',
		name: 'Lever Overhead Triceps Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '822',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVParallelGripChestPress',
		name: 'Lever Parallel Grip Chest Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '823',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVParallelGripInclineBenchPress',
		name: 'Lever Parallel Grip Incline Bench Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '824',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVParallelGripInclineBenchPressPL',
		name: 'Lever Parallel Grip Incline Bench Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '825',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/LVParallelGripInclineChestPress',
		name: 'Lever Parallel Grip Incline Chest Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '826',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVPecDeckFly',
		name: 'Lever Pec Deck Fly',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Pectoralis Minor', 'Serratus Anterior']
		},
		mechanics: 'Isolated'
	},
	{
		id: '827',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVPowerRunnerPL',
		name: 'Lever Power Runner (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '828',
		url: 'https://exrx.net/WeightExercises/Power/LVPowerTwist',
		name: 'Lever Power Twist (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Miscellaneous',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '829',
		url: 'https://exrx.net/WeightExercises/Brachialis/LVPreacherCurl',
		name: 'Lever Preacher Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '830',
		url: 'https://exrx.net/WeightExercises/Brachialis/LVPreacherCurlHighPL',
		name: 'Lever Preacher Curl (arms high, plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '831',
		url: 'https://exrx.net/WeightExercises/Brachialis/LVPreacherCurlHigh',
		name: 'Lever Preacher Curl (arms high)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '832',
		url: 'https://exrx.net/WeightExercises/Brachialis/LVPreacherCurlH',
		name: 'Lever Preacher Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '833',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/LVPullBackExtension',
		name: 'Lever Pull Back Extension',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '834',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVPulldown2',
		name: 'Lever Pulldown',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '835',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVPulldown',
		name: 'Lever Pulldown',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '836',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVPulldownParallelGrip',
		name: 'Lever Pulldown (parallel grip)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Biceps Brachii',
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '837',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVPulldownH',
		name: 'Lever Pulldown (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '838',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVPullover',
		name: 'Lever Pullover',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '839',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVPulloverH',
		name: 'Lever Pullover (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '840',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVPushCrunch',
		name: 'Lever Push Crunch',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '841',
		url: 'https://exrx.net/WeightExercises/Power/LVPushPull',
		name: 'Lever Push Pull (plate loaded)',
		equipment: ['Machine'],
		force: ['Push', 'Pull'],
		muscles: {
			category: 'Miscellaneous',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '842',
		url: 'https://exrx.net/WeightExercises/Triceps/LVPushdown',
		name: 'Lever Pushdown',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '843',
		url: 'https://exrx.net/WeightExercises/WristExtensors/LVRadialFlexion',
		name: 'Lever Radial Deviation',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Extensor Carpi Radialis', 'Flexor Carpi Radialis'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '844',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVRearDeltRaise',
		name: 'Lever Rear Delt Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Deltoid, Lateral',
				'Trapezius, Upper (part II)',
				'Levator Scapulae',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '845',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVRearLateralRaiseOnExtArmLatRsMch',
		name: 'Lever Rear Lateral Raise (on extended arm kneeling lateral raise machine)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '846',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVRearLateralRaiseOnLatRsMch',
		name: 'Lever Rear Lateral Raise (on lateral raise machine)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '847',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVRearLunge',
		name: 'Lever Rear Lunge (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '848',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVRearLunge',
		name: 'Lever Rear Lunge (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '849',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVRearPulldownPL',
		name: 'Lever Rear Pulldown (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '850',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVReclinedShoulderPressParGrip',
		name: 'Lever Reclined Parallel Grip Shoulder Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '851',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVReclinedShoulderPress',
		name: 'Lever Reclined Shoulder Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '852',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVReclinedShoulderPressPL',
		name: 'Lever Reclined Shoulder Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '853',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LVReverseCalfExtension',
		name: 'Lever Reverse Calf Extension',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '854',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LVSeatedReverseCalfExtHammer',
		name: 'Lever Reverse Calf Extension (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '855',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LVReverseCalfRaise',
		name: 'Lever Reverse Calf Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '856',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LVReverseVCalfRaiseH',
		name: 'Lever Reverse Calf Raise (on v-squat machine, plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '857',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LVReverseCalfRaisePL',
		name: 'Lever Reverse Calf Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '858',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/LVReverseCurl',
		name: 'Lever Reverse Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Biceps Brachii'],
			synergists: ['Brachialis', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '859',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVReverseHyperextension',
		name: 'Lever Reverse Hyper-extension (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Hamstrings']
		},
		mechanics: 'Isolated'
	},
	{
		id: '860',
		url: 'https://exrx.net/WeightExercises/Brachioradialis/LVReversePreacherCurl',
		name: 'Lever Reverse Preacher Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachioradialis',
			target: ['Brachioradialis'],
			synergists: ['Brachialis', 'Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '861',
		url: 'https://exrx.net/WeightExercises/WristExtensors/LVReverseWristCurl',
		name: 'Lever Reverse Wrist Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Wrist Extensors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '862',
		url: 'https://exrx.net/WeightExercises/WristExtensors/LVReverseWristCurlPL',
		name: 'Lever Reverse Wrist Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Wrist Extensors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '863',
		url: 'https://exrx.net/WeightExercises/WristExtensors/LVRollerRadialFlexion',
		name: 'Lever Roller Radial Deviation',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Extensor Carpi Radialis', 'Flexor Carpi Radialis'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '864',
		url: 'https://exrx.net/WeightExercises/WristFlexors/LVRollerUlnarFlexion',
		name: 'Lever Roller Ulnar Deviation',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Flexor Carpi Ulnaris', 'Extensor Carpi Ulnaris'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '865',
		url: 'https://exrx.net/WeightExercises/WristExtensors/LVRollerWristExtention',
		name: 'Lever Roller Wrist Extension',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Extensors',
			target: ['Wrist Extensors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '866',
		url: 'https://exrx.net/WeightExercises/WristFlexors/LVRollerWristFlexion',
		name: 'Lever Roller Wrist Flexion',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '867',
		url: 'https://exrx.net/WeightExercises/Soleus/LVSeatedCalfExtension',
		name: 'Lever Seated Calf Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Inner Calf',
			target: ['Soleus'],
			synergists: ['Gastrocnemius']
		},
		mechanics: 'Isolated'
	},
	{
		id: '868',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVSeatedCalfPress',
		name: 'Lever Seated Calf Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '869',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVSeatedCalfPressH',
		name: 'Lever Seated Calf Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '870',
		url: 'https://exrx.net/WeightExercises/Soleus/LVSeatedCalfRaise',
		name: 'Lever Seated Calf Raise',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Inner Calf',
			target: ['Soleus'],
			synergists: ['Gastrocnemius']
		},
		mechanics: 'Isolated'
	},
	{
		id: '871',
		url: 'https://exrx.net/WeightExercises/Soleus/LVSeatedCalfRaiseH',
		name: 'Lever Seated Calf Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Inner Calf',
			target: ['Soleus'],
			synergists: ['Gastrocnemius']
		},
		mechanics: 'Isolated'
	},
	{
		id: '872',
		url: 'https://exrx.net/WeightExercises/Triceps/LVSeatedCloseGripPress',
		name: 'Lever Seated Close Grip Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Deltoid, Anterior', 'Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular']
		},
		mechanics: 'Compound'
	},
	{
		id: '873',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVSeatedCrunch',
		name: 'Lever Seated Crunch',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '874',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVSeatedCrunchArmBar',
		name: 'Lever Seated Crunch (arm bar)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '875',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVSeatedCrunchArmPad',
		name: 'Lever Seated Crunch (arm pad)',
		equipment: ['Machine'],
		force: ['Pull', 'Push'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '876',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVSeatedCrunchChestPad',
		name: 'Lever Seated Crunch (chest pad)',
		equipment: ['Machine'],
		force: ['Pull', 'Push'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '877',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVSeatedDeclineFly',
		name: 'Lever Seated Decline Fly (gripless)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Pectoralis Minor']
		},
		mechanics: 'Isolated'
	},
	{
		id: '878',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVSeatedFly2',
		name: 'Lever Seated Fly',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Deltoid, Anterior',
				'Biceps Brachii, Short Head',
				'Serratus Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '879',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVSeatedFly',
		name: 'Lever Seated Fly',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Deltoid, Anterior',
				'Biceps Brachii, Short Head',
				'Serratus Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '880',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVSeatedFlyGripless',
		name: 'Lever Seated Fly (gripless)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Deltoid, Anterior',
				'Serratus Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '881',
		url: 'https://exrx.net/WeightExercises/Pronators/LVSeatedPronation',
		name: 'Lever Seated Forearm Pronation',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Pronators',
			target: ['Pronators'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '882',
		url: 'https://exrx.net/WeightExercises/Supinators/LVSeatedSupination',
		name: 'Lever Seated Forearm Supination',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Supinators',
			target: ['Supinator'],
			synergists: ['Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '883',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/LVSeatXGripShrug',
		name: 'Lever Seated Gripless Shrug',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '884',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVSeatedHighRowB',
		name: 'Lever Seated High Row',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Erector Spinae'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '885',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVSeatedHighRowC',
		name: 'Lever Seated High Row',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '886',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVSeatedHighRow',
		name: 'Lever Seated High Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '887',
		url: 'https://exrx.net/WeightExercises/HipAbductor/LVSeatedHipAbduction',
		name: 'Lever Seated Hip Abduction',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Abductors (listed below)'],
			synergists: [
				'Gluteus Medius',
				'Gluteus Minimus',
				'Gluteus Maximus',
				'Piriformis',
				'Obturator externus'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '888',
		url: 'https://exrx.net/WeightExercises/HipAbductor/LVSeatedHipAbductionH',
		name: 'Lever Seated Hip Abduction (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Abductors (listed below)'],
			synergists: [
				'Gluteus Medius',
				'Gluteus Minimus',
				'Gluteus Maximus',
				'Piriformis',
				'Obturator externus'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '889',
		url: 'https://exrx.net/WeightExercises/HipAdductors/LVSeatedHipAdduction',
		name: 'Lever Seated Hip Adduction',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Adductors',
			target: ['Adductors, Hip'],
			synergists: ['Pectineus', 'Gracilis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '890',
		url: 'https://exrx.net/WeightExercises/HipAdductors/LVSeatedHipAdductionH',
		name: 'Lever Seated Hip Adduction (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Adductors',
			target: ['Adductors, Hip'],
			synergists: ['Pectineus', 'Gracilis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '891',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVSeatedIronCrossFly',
		name: 'Lever Seated Iron Cross Fly',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '892',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVSeatedLegCurl',
		name: 'Lever Seated Leg Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '893',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVSeatedLegCurlH',
		name: 'Lever Seated Leg Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '894',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSeatedLegPress',
		name: 'Lever Seated Leg Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '895',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSeatedLegPress',
		name: 'Lever Seated Leg Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '896',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSeatedLegPressH',
		name: 'Lever Seated Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '897',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSeatedLegPressH',
		name: 'Lever Seated Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '898',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVSeatedLegRaiseCrunch',
		name: 'Lever Seated Leg Raise Crunch',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '899',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVSeatedLegRaiseCrunchPL',
		name: 'Lever Seated Leg Raise Crunch (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '900',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVSeatedLowRow',
		name: 'Lever Seated Low Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '901',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVRearDeltRow',
		name: 'Lever Seated Rear Delt Row',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '902',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVRearDeltRowHammer',
		name: 'Lever Seated Rear Delt Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '903',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVRearDeltRowC',
		name: 'Lever Seated Rear Delt Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '904',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVSeatedRearLateralRaise',
		name: 'Lever Seated Rear Lateral Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '905',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LVSeatedReverseCalfPress',
		name: 'Lever Seated Reverse Calf Press',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '906',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVSeatedRearDeltFly',
		name: 'Lever Seated Reverse Fly (gripless)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '907',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVRearDeltFlyGriplessPecDeck',
		name: 'Lever Seated Reverse Fly (on pec deck)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '908',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVReverseFlyOverhand',
		name: 'Lever Seated Reverse Fly (overhand grip)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '909',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVRearLateralRaise',
		name: 'Lever Seated Reverse Fly (parallel grip)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '910',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVReverseFlyPronated',
		name: 'Lever Seated Reverse Fly (pronated parallel grip)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '911',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVSeatedRow',
		name: 'Lever Seated Row',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '912',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVSeatedRowNoPadPL',
		name: 'Lever Seated Row (no chest pad, plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Erector Spinae',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '913',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVSeatedRowNoPad',
		name: 'Lever Seated Row (no chest pad)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Erector Spinae',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '914',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/LVSeatedShrug',
		name: 'Lever Seated Shrug (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '915',
		url: 'https://exrx.net/WeightExercises/Obliques/LVSeatedSideBend',
		name: 'Lever Seated Side Bend',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '916',
		url: 'https://exrx.net/WeightExercises/Obliques/LVSideCrunch',
		name: 'Lever Seated Side Crunch',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '917',
		url: 'https://exrx.net/WeightExercises/Obliques/LVSeatedSideLegRaiseCrunch',
		name: 'Lever Seated Side Leg Raise Crunch (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '918',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LVSeatedTibiaRaisePL',
		name: 'Lever Seated Tibia Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '919',
		url: 'https://exrx.net/WeightExercises/Obliques/LVTwistAltMach',
		name: 'Lever Seated Twist',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '920',
		url: 'https://exrx.net/WeightExercises/Obliques/LVTwistLower',
		name: 'Lever Seated Twist',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '921',
		url: 'https://exrx.net/WeightExercises/Obliques/LVTwist',
		name: 'Lever Seated Twist',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '922',
		url: 'https://exrx.net/WeightExercises/Obliques/LVTwistGripless',
		name: 'Lever Seated Twist (gripless)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '923',
		url: 'https://exrx.net/WeightExercises/Obliques/LVSeatedTwistingLegRaiseCrunch',
		name: 'Lever Seated Twisting Leg Raise Crunch (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '924',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/LVExternalRotation',
		name: 'Lever Shoulder External Rotation',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Infraspinatus'],
			synergists: ['Teres Minor', 'Deltoid, Posterior']
		},
		mechanics: 'Isolated'
	},
	{
		id: '925',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/LVShoulderExternalRotationPL',
		name: 'Lever Shoulder External Rotation (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Teres Minor'],
			synergists: ['Infraspinatus', 'Deltoid, Posterior', 'Supraspinatus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '926',
		url: 'https://exrx.net/WeightExercises/Subscapularis/LVInternalRotation',
		name: 'Lever Shoulder Internal Rotation',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Internal Rotators',
			target: ['Subscapularis'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Anterior'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '927',
		url: 'https://exrx.net/WeightExercises/Subscapularis/LVShoulderInternalRotationPL',
		name: 'Lever Shoulder Internal Rotation (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Internal Rotators',
			target: ['Subscapularis'],
			synergists: ['Pectoralis Major, Sternal', 'Latissimus Dorsi', 'Teres Major']
		},
		mechanics: 'Isolated'
	},
	{
		id: '928',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVShoulderPress',
		name: 'Lever Shoulder Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '929',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVShoulderPressParGrip',
		name: 'Lever Shoulder Press (parallel grip)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '930',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/LVShoulderPressH',
		name: 'Lever Shoulder Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '931',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/LVShrug',
		name: 'Lever Shrug',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '932',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/LVShrugH',
		name: 'Lever Shrug (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '933',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVSideLyingLegHipRaise',
		name: 'Lever Side Lying Leg Hip Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Obliques',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '934',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSingleLeg45LegPress',
		name: 'Lever Single Leg 45° Leg Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '935',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSingleLeg45LegPress',
		name: 'Lever Single Leg 45° Leg Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '936',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSingleLegLyingLegPress',
		name: 'Lever Single Leg Lying Leg Press (custom - plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '937',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSingleLegLyingLegPress',
		name: 'Lever Single Leg Lying Leg Press (custom - plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '938',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVSingleLegSeatedLegCurl',
		name: 'Lever Single Leg Seated Leg Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '939',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVSingleLegSeatedLegCurlHammer',
		name: 'Lever Single Leg Seated Leg Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '940',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSingleLegLegPress',
		name: 'Lever Single Leg Seated Leg Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '941',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSingleLegLegPress',
		name: 'Lever Single Leg Seated Leg Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '942',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSingleLegPressH',
		name: 'Lever Single Leg Seated Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '943',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSingleLegPressH',
		name: 'Lever Single Leg Seated Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '944',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LVSingleLegSeatedSeatedTibiaRaisePL',
		name: 'Lever Single Leg Seated Tibia Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '945',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSingleLegSplitSquat',
		name: 'Lever Single Leg Split Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '946',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSingleLegSplitSquat',
		name: 'Lever Single Leg Split Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '947',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSingleLegSplitVSquat',
		name: 'Lever Single Leg Split V-Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '948',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSingleLegSplitVSquat',
		name: 'Lever Single Leg Split V-Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '949',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSingleLegSquat',
		name: 'Lever Single Leg Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '950',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSingleLegSquat',
		name: 'Lever Single Leg Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '951',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSingleLegStandingLegPress',
		name: 'Lever Single Leg Standing Leg Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '952',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSlidingSplitSquatPL',
		name: 'Lever Sliding Split Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '953',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSplitSquat',
		name: 'Lever Split Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '954',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSplitSquat',
		name: 'Lever Split Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '955',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSingleLegVSquat',
		name: 'Lever Split V-Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '956',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSingleLegVSquat',
		name: 'Lever Split V-Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '957',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSquat',
		name: 'Lever Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '958',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSquat',
		name: 'Lever Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '959',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSquatPL',
		name: 'Lever Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '960',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSquatPL3',
		name: 'Lever Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '961',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSquatPL3',
		name: 'Lever Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '962',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVSquatPL',
		name: 'Lever Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '963',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVStandingCalfRaise',
		name: 'Lever Standing Calf Raise',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '964',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVStandingCalfRaiseBelt',
		name: 'Lever Standing Calf Raise (belt loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '965',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/LVStandingCalfRaisePL',
		name: 'Lever Standing Calf Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '966',
		url: 'https://exrx.net/WeightExercises/Pronators/LVPronation',
		name: 'Lever Standing Forearm Pronation',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Pronators',
			target: ['Pronators'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '967',
		url: 'https://exrx.net/WeightExercises/Supinators/LVSupination',
		name: 'Lever Standing Forearm Supination',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Supinators',
			target: ['Supinator'],
			synergists: ['Biceps Brachii']
		},
		mechanics: 'Isolated'
	},
	{
		id: '968',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVSingleLegStandingLegPress',
		name: 'Lever Standing Glute Kickback',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '969',
		url: 'https://exrx.net/WeightExercises/HipAbductor/LVStandHipAbduction',
		name: 'Lever Standing Hip Abduction',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Abductors (listed below)'],
			synergists: ['Tensor Fasciae Latae', 'Gluteus Medius', 'Gluteus Minimus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '970',
		url: 'https://exrx.net/WeightExercises/HipAdductors/LVStandHipAdduction',
		name: 'Lever Standing Hip Adduction',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Adductors',
			target: ['Adductors, Hip'],
			synergists: ['Pectineus', 'Gracilis', 'Gluteus Maximus, Lower Fibers']
		},
		mechanics: 'Isolated'
	},
	{
		id: '971',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVStandingHipExtension',
		name: 'Lever Standing Hip Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '972',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVStandingHipExtensionTech',
		name: 'Lever Standing Hip Extension (with abdominal pad)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '973',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVStandingLegCurl',
		name: 'Lever Standing Leg Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '974',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVStandingLegCurlLegExt',
		name: 'Lever Standing Leg Curl (on leg extension)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '975',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVStandingLegCurlMultiHip',
		name: 'Lever Standing Leg Curl (on multi-hip machine)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '976',
		url: 'https://exrx.net/WeightExercises/Brachialis/LVPreacherCurlNoSeat',
		name: 'Lever Standing Preacher Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '977',
		url: 'https://exrx.net/WeightExercises/Brachialis/LVPreacherCurlNoSeatPL',
		name: 'Lever Standing Preacher Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '978',
		url: 'https://exrx.net/WeightExercises/Obliques/LVStandingSideBend',
		name: 'Lever Standing Side Bend',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '979',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/LVStandingTibiaRaisePL',
		name: 'Lever Standing Tibia Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '980',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVStiffLegDeadlift',
		name: 'Lever Stiff Leg Deadlift (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Erector Spinae', 'Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Compound'
	},
	{
		id: '981',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/LVStiffLegDeadlift',
		name: 'Lever Stiff Leg Deadlift (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Compound'
	},
	{
		id: '982',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVStraightBackSeatedRowNoPadPL',
		name: 'Lever Straight Back Seated Row (no chest pad, plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '983',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVStraightBackSeatedRowNoPad',
		name: 'Lever Straight Back Seated Row (no chest pad)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '984',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/LVStraightLegDeadlift',
		name: 'Lever Straight Leg Deadlift (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Hamstrings', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '985',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVStraightLegDeadlift',
		name: 'Lever Straight Leg Deadlift (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Erector Spinae', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '986',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVStrBackStiffLegDeadlift',
		name: 'Lever Straight-back Stiff-leg Deadlift (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '987',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVStrBackStrLegDeadlift',
		name: 'Lever Straight-back Straight-leg Deadlift (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '988',
		url: 'https://exrx.net/WeightExercises/Hamstrings/LVStraightLegLyingHipExtension',
		name: 'Lever Straight-leg Lying Hip Extension',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '989',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/LVTBarRearDeltRow',
		name: 'Lever T-Bar Rear Delt Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Brachialis',
				'Brachioradialis',
				'Rhomboids'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '990',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVTBarRow',
		name: 'Lever T-bar Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['General, Back'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '991',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVTBarRowLM',
		name: 'Lever T-bar Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['General, Back'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '992',
		url: 'https://exrx.net/WeightExercises/Triceps/LVTriDip',
		name: 'Lever Triceps Dip',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '993',
		url: 'https://exrx.net/WeightExercises/Triceps/LVTriDip2',
		name: 'Lever Triceps Dip',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '994',
		url: 'https://exrx.net/WeightExercises/Triceps/LVTriDipH',
		name: 'Lever Triceps Dip (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '995',
		url: 'https://exrx.net/WeightExercises/Triceps/LVTriExt',
		name: 'Lever Triceps Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '996',
		url: 'https://exrx.net/WeightExercises/Triceps/LVTriExt2',
		name: 'Lever Triceps Extension',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '997',
		url: 'https://exrx.net/WeightExercises/Triceps/LVTricepsExtensionNoSeatPL',
		name: 'Lever Triceps Extension (no seat, plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '998',
		url: 'https://exrx.net/WeightExercises/Triceps/LVTriExtGripless',
		name: 'Lever Triceps Extension (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '999',
		url: 'https://exrx.net/WeightExercises/WristFlexors/LVUlnarFlexion',
		name: 'Lever Ulnar Deviation',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Flexor Carpi Ulnaris', 'Extensor Carpi Ulnaris'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1000',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVUnderhandPulldownS',
		name: 'Lever Underhand Pulldown',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1001',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVUnderhandPulldown',
		name: 'Lever Underhand Pulldown',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1002',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVUnderhandPulldownH',
		name: 'Lever Underhand Pulldown (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1003',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/LVUnderhandPulldownPL',
		name: 'Lever Underhand Pulldown (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1004',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVSeatedUnderhandRow',
		name: 'Lever Underhand Seated Row',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1005',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVSeatedUnderhandRowS',
		name: 'Lever Underhand Seated Row',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1006',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVSeatedUnderhandRowH',
		name: 'Lever Underhand Seated Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1007',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/LVUprightExternalRotation',
		name: 'Lever Upright Shoulder External Rotation',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Teres Minor'],
			synergists: ['Infraspinatus', 'Deltoid, Posterior', 'Supraspinatus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1008',
		url: 'https://exrx.net/WeightExercises/Subscapularis/LVUprightInternalRotation',
		name: 'Lever Upright Shoulder Internal Rotation',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Internal Rotators',
			target: ['Subscapularis'],
			synergists: ['Pectoralis Major, Sternal', 'Latissimus Dorsi', 'Teres Major']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1009',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVVSquat',
		name: 'Lever V-Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1010',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVVSquat',
		name: 'Lever V-Squat',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1011',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/LVVSquatH',
		name: 'Lever V-Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1012',
		url: 'https://exrx.net/WeightExercises/Quadriceps/LVVSquatH',
		name: 'Lever V-Squat (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1013',
		url: 'https://exrx.net/WeightExercises/HipFlexors/LVVerticalLegRaise',
		name: 'Lever Vertical Leg Raise',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1014',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/LVVerticalLegHipRaise',
		name: 'Lever Vertical Leg-Hip Raise (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1015',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVWideGripBentOverRowH',
		name: 'Lever Wide Grip Bent-over Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['General, Back'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1016',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/LVWideGripChestPress',
		name: 'Lever Wide Grip Chest Press (plate loaded)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '1017',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVWideGripSeatedRow',
		name: 'Lever Wide Grip Seated Row',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1018',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVWideGripSeatedRowH',
		name: 'Lever Wide Grip Seated Row (high bar, plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1019',
		url: 'https://exrx.net/WeightExercises/BackGeneral/LVWideLowGripSeatedRowH',
		name: 'Lever Wide Grip Seated Row (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1020',
		url: 'https://exrx.net/WeightExercises/WristFlexors/LVWristCurl',
		name: 'Lever Wrist Curl',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1021',
		url: 'https://exrx.net/WeightExercises/WristFlexors/LVWristCurlPL',
		name: 'Lever Wrist Curl (plate loaded)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1022',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWLunge',
		name: 'Lunge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1023',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWLunge',
		name: 'Lunge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1024',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWLyingLegRaise',
		name: 'Lying Leg Raise (on bench)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1025',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWLyingLegRaiseFloor',
		name: 'Lying Leg Raise (on floor)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1026',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWLyingLegHipRaise',
		name: 'Lying Leg-Hip Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1027',
		url: 'https://exrx.net/WeightExercises/Splenius/LyingIsometricNeckRetr',
		name: 'Lying Neck Retraction Isometric',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1028',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWScissorKick',
		name: 'Lying Scissor Kick',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1029',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWSimAltLyingLegRaise',
		name: 'Lying Simultaneous Alternating Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: [],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1030',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWSimAltStraightLegRaise',
		name: 'Lying Simultaneous Alternating Straight Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1031',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWStraightLegRaise',
		name: 'Lying Straight Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1032',
		url: 'https://exrx.net/WeightExercises/Obliques/BWLyingTwist',
		name: 'Lying Twist',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1033',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/AsChestDip',
		name: 'Machine-assisted Chest Dip',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1034',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/AsChestDipKneeling',
		name: 'Machine-assisted Chest Dip (kneeling)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1035',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsUnderhandChinup',
		name: 'Machine-assisted Chin-up',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1036',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsCloseGripChinupKneeling',
		name: 'Machine-assisted Parallel Close Grip Pull-up',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1037',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsCloseGripChinup',
		name: 'Machine-assisted Parallel Close Grip Pull-up (standing)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1038',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsPullupKneeling',
		name: 'Machine-assisted Pull-up',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1039',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsPullupOpen',
		name: 'Machine-assisted Pull-up (open-centered bar, standing)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1040',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsPullupOpenKneeling',
		name: 'Machine-assisted Pull-up (open-centered bar)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1041',
		url: 'https://exrx.net/WeightExercises/Triceps/ASTriDip',
		name: 'Machine-assisted Triceps Dip',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1042',
		url: 'https://exrx.net/WeightExercises/Triceps/ASTriDipKneeling',
		name: 'Machine-assisted Triceps Dip (kneeling)',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1043',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/MBSitUpChest',
		name: 'Medicine Ball Chest Throw Sit-up (machine)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Aductor Brevis',
				'Obliques',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Triceps Brachii '
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1044',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/MBSitUp',
		name: 'Medicine Ball Overhead Throw Sit-up (machine)',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Aductor Brevis',
				'Obliques',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Triceps, Long Head'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1045',
		url: 'https://exrx.net/WeightExercises/Obliques/WTStraightArmRussionTwist',
		name: 'Medicine Ball Straight Arm Russian Twist (legs extended)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1046',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/BWNeutralGripChinup',
		name: 'Neutral Grip Chin-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1047',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/BWPullupN',
		name: 'Neutral Grip Pull-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1048',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BWOneArmPushup',
		name: 'One Arm Push-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '1049',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/BWCloseGripChinup',
		name: 'Parallel Close Grip Pull-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1050',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsUnderhandChinupPartner',
		name: 'Partner-assisted Chin-up',
		equipment: ['Partner'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1051',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsChinupPartner',
		name: 'Partner-assisted Pull-up',
		equipment: ['Partner'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1052',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsRearPullupPartner',
		name: 'Partner-assisted Rear Pull-up',
		equipment: ['Partner'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1053',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWPikeDiscs',
		name: 'Pike on Discs',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1054',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWPikeWheel',
		name: 'Pike on Power Wheel',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1055',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/BWPikePress',
		name: 'Pike Press',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1056',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/BWPikePushup',
		name: 'Pike Push-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Deltoid, Anterior',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Triceps Brachii'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1057',
		url: 'https://exrx.net/WeightExercises/Obliques/BWExerciseBallPlankTwist',
		name: 'Plank Twist (on stability ball)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1058',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/BWPullup',
		name: 'Pull-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1059',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/BWPullupOpen',
		name: 'Pull-up (open-centered bar)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1060',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BWPushup',
		name: 'Push-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '1061',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/BWPushupKnee',
		name: 'Push-up (on knees)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '1062',
		url: 'https://exrx.net/WeightExercises/SerratusAnterior/BWPushUpPlus',
		name: 'Push-up Plus',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Serratus',
			target: ['Serratus Anterior'],
			synergists: [
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Deltoid, Anterior',
				'Triceps Brachii'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1063',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/BackPlank',
		name: 'Rear Bridge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1064',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/BWRearDeltInvertedRow',
		name: 'Rear Delt Inverted Row',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1065',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/BWRearDeltInvertedRowHigh',
		name: 'Rear Delt Inverted Row (high bar)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1066',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/BWRearDeltInvertedRowHips',
		name: 'Rear Delt Inverted Row (on hips)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1067',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWRearLunge',
		name: 'Rear Lunge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1068',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWRearLunge',
		name: 'Rear Lunge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1069',
		url: 'https://exrx.net/WeightExercises/Splenius/BWRearNeckBridge',
		name: 'Rear Neck Bridge',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: [
				'Trapezius, Upper',
				'Levator Scapulae',
				'Sternocleidomastoid, Posterior Fibers',
				'Erector Spinae',
				'Gluteus Maximus',
				'Quadriceps'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1070',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/BWRearPullup',
		name: 'Rear Pull-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1071',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWRecliningVerticalLegHipRaise',
		name: 'Reclining Vertical Leg-Hip Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1072',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/BWReverseCalfRaise',
		name: 'Reverse Calf Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1073',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWReverseHyperextension',
		name: 'Reverse Hyper-extension',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Hamstrings']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1074',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWReverseHyperextensionBall',
		name: 'Reverse Hyper-extension (on stability ball)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1075',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWRomanChairSitup',
		name: 'Roman Chair Sit-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1076',
		url: 'https://exrx.net/WeightExercises/OlympicLifts/RomanianDeadlift',
		name: 'Romanian Deadlift',
		equipment: ['Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: [],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '1077',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SBReverseCalfRaise',
		name: 'Safety Bar Reverse Calf Raise',
		equipment: ['Safety Barbell'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1078',
		url: 'https://exrx.net/WeightExercises/Soleus/SBSeatedCalfRaise',
		name: 'Safety Bar Seated Calf Raise',
		equipment: ['Safety Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Inner Calf',
			target: ['Soleus'],
			synergists: ['Gastrocnemius']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1079',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SBSquat',
		name: 'Safety Barbell Squat',
		equipment: ['Safety Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1080',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SBSquat',
		name: 'Safety Barbell Squat',
		equipment: ['Safety Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1081',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SBSquatHandles',
		name: 'Safety Barbell Squat (long handles)',
		equipment: ['Safety Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1082',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SBSquatHandles',
		name: 'Safety Barbell Squat (long handles)',
		equipment: ['Safety Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1083',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SBSquatSelfSpot',
		name: 'Safety Barbell Squat (self-spotting)',
		equipment: ['Safety Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1084',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SBSquatSelfSpot',
		name: 'Safety Barbell Squat (self-spotting)',
		equipment: ['Safety Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1085',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SBStandingCalfRaise',
		name: 'Safety Barbell Standing Leg Calf Raise',
		equipment: ['Safety Barbell'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1086',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWSeatedLegRaise',
		name: 'Seated Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1087',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/AsChestDipSelf',
		name: 'Self-assisted Chest Dip',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1088',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsUnderhandChinupSelf',
		name: 'Self-assisted Chin-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1089',
		url: 'https://exrx.net/WeightExercises/Hamstrings/ASHamstringRaiseSelf',
		name: 'Self-assisted Inverse Leg Curl',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: [
				'Gastrocnemius',
				'Gracilis',
				'Sartorius',
				'Popliteus',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Wrist Flexors'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1090',
		url: 'https://exrx.net/WeightExercises/Hamstrings/ASHamstringRaiseSelfFloor',
		name: 'Self-assisted Inverse Leg Curl (on floor)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: [
				'Gastrocnemius',
				'Gracilis',
				'Sartorius',
				'Popliteus',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Biceps Brachii',
				'Brachialis',
				'Wrist Flexors'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1091',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/AsChinupSelf',
		name: 'Self-assisted Pull-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1092',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/ASRearPullupSelf',
		name: 'Self-assisted Rear Pull-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1093',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/ASSingleLegCalfRaiseSelf',
		name: 'Self-assisted Single Leg Calf Raise',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1094',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/ASSingleLegCalfRaiseSelfFoot',
		name: 'Self-assisted Single Leg Calf Raise (with opposite leg)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus', 'Quadriceps', 'Gluteus Maximus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1095',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/ASSingleLegSquatSelfPole',
		name: 'Self-assisted Single Leg Reclining Squat (pole)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1096',
		url: 'https://exrx.net/WeightExercises/Quadriceps/ASSingleLegSquatSelfPole',
		name: 'Self-assisted Single Leg Reclining Squat (pole)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1097',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/AsSingleLegSquatSelf',
		name: 'Self-assisted Single Leg Squat (bar)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1098',
		url: 'https://exrx.net/WeightExercises/Quadriceps/ASSingleLegSquatSelf',
		name: 'Self-assisted Single Leg Squat (bar)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1099',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/AsSingleLegSquatLegSelf',
		name: 'Self-assisted Single Leg Squat (leg wrapped)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1100',
		url: 'https://exrx.net/WeightExercises/Quadriceps/ASSingleLegSquatSelfLeg',
		name: 'Self-assisted Single Leg Squat (leg wrapped)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1101',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/ASSquatSelf',
		name: 'Self-assisted Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1102',
		url: 'https://exrx.net/WeightExercises/Quadriceps/ASSquatSelf',
		name: 'Self-assisted Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1103',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/ASSquatSelfST',
		name: 'Self-assisted Squat (on suspension trainer)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1104',
		url: 'https://exrx.net/WeightExercises/Quadriceps/ASSquatSelfST',
		name: 'Self-assisted Squat (on suspension trainer)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1105',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/ASStepDownSelf',
		name: 'Self-assisted Step-down',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (following leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1106',
		url: 'https://exrx.net/WeightExercises/Quadriceps/ASStepDownSelf',
		name: 'Self-assisted Step-down',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (following leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1107',
		url: 'https://exrx.net/WeightExercises/Triceps/ASTricepsDipSelf',
		name: 'Self-assisted Triceps Dip',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1108',
		url: 'https://exrx.net/WeightExercises/Obliques/BWSideBendBallArmsUp',
		name: 'Side Bend (on stability ball, arms up)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1109',
		url: 'https://exrx.net/WeightExercises/Obliques/BWBallSideBend',
		name: 'Side Bend (on stability ball, hand behind head)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1110',
		url: 'https://exrx.net/WeightExercises/Obliques/BWSideBendBallHandsBehindHead',
		name: 'Side Bend (on stability ball, hands behind head)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1111',
		url: 'https://exrx.net/WeightExercises/Obliques/BWSideBridge',
		name: 'Side Bridge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Gluteus Medius',
				'Gluteus Minimus',
				'Tensor Fasciae Latae',
				'Quadratus Lumborum',
				'Psoas Major',
				'Iliocastalis Lumborum',
				'Iliocastalis Thoracis',
				'Adductors, Hip',
				'Pectineus',
				'Gracilis',
				'Gluteus Maximus, Lower Fibers',
				'Deltoid, Lateral',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1112',
		url: 'https://exrx.net/WeightExercises/HipAbductor/BWSideBridgeHipAbduction',
		name: 'Side Bridge Hip Abduction',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Tensor Fasciae Latae', 'Gluteus Medius', 'Gluteus Minimus'],
			synergists: [
				'Obliques',
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1113',
		url: 'https://exrx.net/WeightExercises/Obliques/BWSideCrunch',
		name: 'Side Crunch',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1114',
		url: 'https://exrx.net/WeightExercises/Obliques/BWSideCrunchOnBall',
		name: 'Side Crunch (on stability ball)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1115',
		url: 'https://exrx.net/WeightExercises/Obliques/BWSidePlank',
		name: 'Side Plank',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1116',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWSingleLeg45Hyperextension',
		name: 'Single Leg 45° Hyperextension',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Erector Spinae', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1117',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegBoxSquat',
		name: 'Single Leg Box Squat (pistol)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1118',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSingleLegBoxSquat',
		name: 'Single Leg Box Squat (pistol)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1119',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/BWSingleLegCalfRaise',
		name: 'Single Leg Calf Raise',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1120',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWBallSingleLegCurlLegFlexed',
		name: 'Single Leg Curl (on stability ball, leg flexed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1121',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/SingleLegDeclineRearBridge',
		name: 'Single Leg Decline Rear Bridge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1122',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/BWSingleLegForwardAngledCalfRaise',
		name: 'Single Leg Forward Angled Calf Raise',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1123',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegHalfSquat',
		name: 'Single Leg Half Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1124',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSingleLegHalfSquat',
		name: 'Single Leg Half Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1125',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWSingleLegHangingHamstringBridge',
		name: 'Single Leg Hanging Hamstring Bridge',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Erector Spinae'],
			synergists: [
				'Hamstrings',
				'Gluteus Maximus',
				'Adductor Magnus',
				'Latissimus Dorsi',
				'Pectoralis Major, Sternal',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1126',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWSingleLegHangingHamstringBridgeCurl',
		name: 'Single Leg Hanging Hamstring Bridge Curl',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Latissimus Dorsi',
				'Pectoralis Major, Sternal',
				'Triceps, Long Head',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Pectoralis Minor',
				'Gastrocnemius',
				'Sartorius',
				'Gracilis',
				'Popliteus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1127',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWLyingHipExtension',
		name: 'Single Leg Hip Bridge',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1128',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegHipThrust',
		name: 'Single Leg Hip Thrust',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1129',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegHipThrustLegExt',
		name: 'Single Leg Hip Thrust (leg extended)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1130',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegPartialBoxSquat',
		name: 'Single Leg Partial Box Squat (pistol)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1131',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSingleLegPartialBoxSquat',
		name: 'Single Leg Partial Box Squat (pistol)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1132',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegRecliningSquat',
		name: 'Single Leg Reclining Squat (bar)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Quadriceps'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Soleus',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1133',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSingleLegRecliningSquat',
		name: 'Single Leg Reclining Squat (bar)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Soleus',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1134',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/BWSingleLegRevCalfRaise',
		name: 'Single Leg Reverse Calf Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1135',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegSplitSquat',
		name: 'Single Leg Split Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1136',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSingleLegSplitSquat',
		name: 'Single Leg Split Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1137',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegSquat',
		name: 'Single Leg Squat (pistol)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1138',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSingleLegSquat',
		name: 'Single Leg Squat (pistol)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1139',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegSquatLegBack',
		name: 'Single Leg Squat (with leg back)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1140',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSingleLegSquatLegBack',
		name: 'Single Leg Squat (with leg back)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1141',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegStiffLegDeadlift',
		name: 'Single Leg Stiff-leg Deadlift',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus (supporting leg)'],
			synergists: ['Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1142',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWBallSingleLegStraightHipLegCurl',
		name: 'Single Leg Straight Hip Leg Curl (on stability ball, leg extended)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1143',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSissySquat',
		name: 'Sissy Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1144',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSissySquatAp',
		name: 'Sissy Squat (on apparatus)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1145',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWSitUp',
		name: 'Sit-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '1146',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWSitUpX',
		name: 'Sit-up (arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '1147',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWSitUpAD',
		name: 'Sit-up (arms down)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '1148',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SL45AlternatingCalfPress',
		name: 'Sled 45° Alternating Calf Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1149',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SL45CalfPress',
		name: 'Sled 45° Calf Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1150',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SL45CalfRaise',
		name: 'Sled 45° Calf Raise',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1151',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SL45CalfPressPL',
		name: 'Sled 45° Calf Raise (plate loaded)',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1152',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SL45LegPress',
		name: 'Sled 45° Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1153',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SL45LegPress',
		name: 'Sled 45° Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1154',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SL45ReverseCalfPress',
		name: 'Sled 45° Reverse Calf Press',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1155',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SL45ReverseCalfRaise',
		name: 'Sled 45° Reverse Calf Raise',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1156',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SL45ReverseCalfRaiseHackPress',
		name: 'Sled 45° Reverse Calf Raise (on hack press)',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1157',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SL45ReverseCalfRaisePL',
		name: 'Sled 45° Reverse Calf Raise (plate loaded)',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1158',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLAlternating45LegPress',
		name: 'Sled Alternating 45° Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1159',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLAlternating45LegPress',
		name: 'Sled Alternating 45° Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1160',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SLDonkeyCalfRaise',
		name: 'Sled Donkey Calf Raise',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1161',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SLForwardAngledCalfRaise',
		name: 'Sled Forward Angled Calf Raise',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1162',
		url: 'https://exrx.net/WeightExercises/WristFlexors/SLGripPlateLoaded',
		name: 'Sled Grip (plate loaded)',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1163',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/SLXGripShrug',
		name: 'Sled Gripless Shrug',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1164',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SLHackCalfPress',
		name: 'Sled Hack Calf Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1165',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLHackPress',
		name: 'Sled Hack Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1166',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLHackPress',
		name: 'Sled Hack Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1167',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SLHackReverseCalfRaise',
		name: 'Sled Hack Reverse Calf Raise',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1168',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLHackSquat',
		name: 'Sled Hack Squat',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1169',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLHackSquat',
		name: 'Sled Hack Squat',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1170',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/SLStandingChestDipWideHorizontalGrip',
		name: 'Sled Horizontal Grip Standing Chest Dip',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1171',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLKneelingHipExtension',
		name: 'Sled Kneeling Glute Kickback',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1172',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/SLLegHipRaise',
		name: 'Sled Leg Hip Raise (ab coaster)',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Sartorius', 'Rectus Femoris', 'Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1173',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SLLyingCalfPress',
		name: 'Sled Lying Calf Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1174',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SLLyingCalfPressPL',
		name: 'Sled Lying Calf Press (plate loaded)',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1175',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLLyingLegPress',
		name: 'Sled Lying Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1176',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLLyingLegPress',
		name: 'Sled Lying Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1177',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLLyingLegPressPL',
		name: 'Sled Lying Leg Press (plate loaded)',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1178',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLLyingLegPressPL',
		name: 'Sled Lying Leg Press (plate loaded)',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1179',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SLLyingReverseCalfPress',
		name: 'Sled Lying Reverse Calf Press',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1180',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SLLyingReverseCalfPressPL',
		name: 'Sled Lying Reverse Calf Press (plate loaded)',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1181',
		url: 'https://exrx.net/WeightExercises/WristFlexors/SLGrip',
		name: 'Sled One Hand Grip',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1182',
		url: 'https://exrx.net/WeightExercises/WristFlexors/SLOneHandGripPlateLoaded',
		name: 'Sled One Hand Grip (plate loaded)',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1183',
		url: 'https://exrx.net/WeightExercises/WristFlexors/SLOneHandPinchGripPL',
		name: 'Sled One Hand Pinch Grip (plate loaded)',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Wrist Flexors',
			target: ['Wrist Flexors'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1184',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLRearLunge',
		name: 'Sled Rear Lunge',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1185',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLRearLunge',
		name: 'Sled Rear Lunge',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1186',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SLReverseCalfRaisePL',
		name: 'Sled Reverse Calf Raise (plate loaded)',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1187',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SLDonkeyReverseCalfRaise',
		name: 'Sled Reverse Donkey Calf Raise (plate loaded)',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1188',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SLSeatedCalfPress',
		name: 'Sled Seated Calf Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1189',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SLSeatedCalfPressLyingLP',
		name: 'Sled Seated Calf Press (on lying leg press)',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1190',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLSeatedLegPress',
		name: 'Sled Seated Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1191',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLSeatedLegPress',
		name: 'Sled Seated Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1192',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SLSeatedReverseCalfPress',
		name: 'Sled Seated Reverse Calf Press',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1193',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/SLShoulderPress',
		name: 'Sled Shoulder Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1194',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/SLShoulderPressParGrip',
		name: 'Sled Shoulder Press (parallel grip)',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1195',
		url: 'https://exrx.net/WeightExercises/Obliques/SLSideHipRaiseAbCoaster',
		name: 'Sled Side Leg Hip Raise (ab coaster)',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Rectus Abdominis',
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Sartorius',
				'Rectus Femoris'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1196',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SVSingleLeg45CalfPress',
		name: 'Sled Single Leg 45° Calf Press',
		equipment: ['Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1197',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLSingleLeg45LegPress',
		name: 'Sled Single Leg 45° Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1198',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLSingleLeg45LegPress',
		name: 'Sled Single Leg 45° Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1199',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SVSingleLeg45ReverseCalfPress',
		name: 'Sled Single Leg 45° Reverse Calf Press',
		equipment: ['Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1200',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLSingleLegHackSquat',
		name: 'Sled Single Leg Hack Squat',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1201',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLSingleLegHackSquat',
		name: 'Sled Single Leg Hack Squat',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1202',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLSingleLegLyingLegPress',
		name: 'Sled Single Leg Lying Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1203',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLSingleLegLyingLegPress',
		name: 'Sled Single Leg Lying Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1204',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLSingleLegLyingLegPressPL',
		name: 'Sled Single Leg Lying Leg Press (plate loaded)',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1205',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLSingleLyingLegPressPL',
		name: 'Sled Single Leg Lying Leg Press (plate loaded)',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1206',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLSingleLegVerticalLegPress',
		name: 'Sled Single Leg Vertical Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1207',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLSingleLegVerticalLegPress',
		name: 'Sled Single Leg Vertical Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1208',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLSquat',
		name: 'Sled Squat',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1209',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLSquat',
		name: 'Sled Squat',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1210',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SLStandingCalfRaise',
		name: 'Sled Standing Calf Raise',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1211',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/SLStandingChestDip',
		name: 'Sled Standing Chest Dip',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1212',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLStandingHipExtension',
		name: 'Sled Standing Glute Kickback',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1213',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SLReverseCalfRaise',
		name: 'Sled Standing Reverse Calf Raise',
		equipment: ['Sled'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1214',
		url: 'https://exrx.net/WeightExercises/Triceps/SLStandingTricepsDip',
		name: 'Sled Standing Triceps Dip',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1215',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SLVerticalCalfPress',
		name: 'Sled Vertical Calf Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1216',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SLVerticalLegPress',
		name: 'Sled Vertical Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1217',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SLVerticalLegPress',
		name: 'Sled Vertical Leg Press',
		equipment: ['Sled'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1218',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/SMBehindNeckPress',
		name: 'Smith Behind Neck Press',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Deltoid, Lateral',
				'Supraspinatus',
				'Triceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1219',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/SMBenchPress',
		name: 'Smith Bench Press',
		equipment: ['Smith Machine', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '1220',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMBentKneeGoodMorning',
		name: 'Smith Bent Knee Good-morning',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1221',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/SMBentKneeGoodMorning',
		name: 'Smith Bent Knee Good-morning',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: [],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1222',
		url: 'https://exrx.net/WeightExercises/BackGeneral/SMBentOverRow',
		name: 'Smith Bent-over Row',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1223',
		url: 'https://exrx.net/WeightExercises/Triceps/SMCloseGripBenchPress',
		name: 'Smith Close Grip Bench Press',
		equipment: ['Smith Machine', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Deltoid, Anterior', 'Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular']
		},
		mechanics: 'Compound'
	},
	{
		id: '1224',
		url: 'https://exrx.net/WeightExercises/Triceps/SMCloseGripInclineBenchPress',
		name: 'Smith Close Grip Incline Bench Press',
		equipment: ['Smith Machine', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Deltoid, Anterior', 'Pectoralis Major, Clavicular']
		},
		mechanics: 'Compound'
	},
	{
		id: '1225',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMDeadlift',
		name: 'Smith Deadlift',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Hamstrings (top half)', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1226',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/SMDeadlift',
		name: 'Smith Deadlift',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: [
				'Gluteus Maximus',
				'Quadriceps',
				'Adductor Magnus',
				'Hamstrings (top half)',
				'Soleus'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1227',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/SMDeclineBenchPress',
		name: 'Smith Decline Bench Press',
		equipment: ['Smith Machine', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '1228',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SMDonkeyCalfRaise',
		name: 'Smith Donkey Calf Raise',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1229',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMFrontSquat',
		name: 'Smith Front Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1230',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SMFrontSquat',
		name: 'Smith Front Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1231',
		url: 'https://exrx.net/WeightExercises/Hamstrings/SMGoodMorning',
		name: 'Smith Good-morning',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1232',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMHackSquat',
		name: 'Smith Hack Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1233',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SMHackSquat',
		name: 'Smith Hack Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1234',
		url: 'https://exrx.net/WeightExercises/PectoralClavicular/SMInclineBenchPress',
		name: 'Smith Incline Bench Press',
		equipment: ['Smith Machine', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Upper Chest',
			target: ['Pectoralis Major, Clavicular'],
			synergists: ['Pectoralis Major, Sternal', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '1235',
		url: 'https://exrx.net/WeightExercises/SerratusAnterior/SMInclineShoulderRaise',
		name: 'Smith Incline Shoulder Raise',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Serratus',
			target: ['Serratus Anterior'],
			synergists: ['Pectoralis Major, Clavicular']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1236',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/SMRearDeltRow',
		name: 'Smith Rear Delt Row',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Brachialis',
				'Brachioradialis',
				'Rhomboids'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1237',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMRearLunge',
		name: 'Smith Rear Lunge',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1238',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SMRearLunge',
		name: 'Smith Rear Lunge',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1239',
		url: 'https://exrx.net/WeightExercises/TibialisAnterior/SMReverseCalfRaise',
		name: 'Smith Reverse Calf Raise',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Shin',
			target: ['Tibialis Anterior'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1240',
		url: 'https://exrx.net/WeightExercises/Soleus/SMSeatedCalfRaise',
		name: 'Smith Seated Calf Raise',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Inner Calf',
			target: ['Soleus'],
			synergists: ['Gastrocnemius']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1241',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/SMShoulderPress',
		name: 'Smith Shoulder Press',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1242',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/SMShrug',
		name: 'Smith Shrug',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1243',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMSingleLegSplitSquat',
		name: 'Smith Single Leg Split Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1244',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SMSingleLegSplitSquat',
		name: 'Smith Single Leg Split Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1245',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMSingleLegSquat',
		name: 'Smith Single Leg Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1246',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SMSingleLegSquat',
		name: 'Smith Single Leg Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1247',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMSplitSquat',
		name: 'Smith Split Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1248',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SMSplitSquat',
		name: 'Smith Split Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1249',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMSquat',
		name: 'Smith Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1250',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SMSquat',
		name: 'Smith Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1251',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/SMStandingCalfRaise',
		name: 'Smith Standing Leg Calf Raise',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1252',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SMStepDown',
		name: 'Smith Step Down',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1253',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMStiffLegDeadlift',
		name: 'Smith Stiff Leg Deadlift',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Erector Spinae', 'Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Compound'
	},
	{
		id: '1254',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/SMStiffLegDeadlift',
		name: 'Smith Stiff Leg Deadlift',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1255',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/SMStraightLegDeadlift',
		name: 'Smith Straight Leg Deadlift',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Hamstrings', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1256',
		url: 'https://exrx.net/WeightExercises/Hamstrings/SMStraightLegDeadlift',
		name: 'Smith Straight Leg Deadlift',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Erector Spinae', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1257',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMStrBackStiffLegDeadlift',
		name: 'Smith Straight-back Stiff-leg Deadlift',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1258',
		url: 'https://exrx.net/WeightExercises/Hamstrings/SMStrBackStrLegDeadlift',
		name: 'Smith Straight-back Straight-leg Deadlift',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1259',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/SMUprightRow',
		name: 'Smith Upright Row',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1260',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/SMWideGripUprightRow',
		name: 'Smith Wide Grip Upright Row',
		equipment: ['Smith Machine'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations',
				'Infraspinatus',
				'Teres Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1261',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/SMWideSquat',
		name: 'Smith Wide Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1262',
		url: 'https://exrx.net/WeightExercises/Quadriceps/SMWideSquat',
		name: 'Smith Wide Squat',
		equipment: ['Smith Machine'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1263',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSplitSquat',
		name: 'Split Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1264',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSplitSquat',
		name: 'Split Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1265',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWSquat',
		name: 'Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1266',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWSquat',
		name: 'Squat',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1267',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWBallRollout',
		name: 'Stability Ball Rollout',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Abs',
			target: [],
			synergists: [
				'Latissimus Dorsi',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Deltoid, Posterior',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1268',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/BWStandingCalfRaise',
		name: 'Standing Calf Raise',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1269',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWStepDown',
		name: 'Step-down',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (following leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1270',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWStepDown',
		name: 'Step-down',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (following leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1271',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/BWStepUp',
		name: 'Step-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (Second Leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1272',
		url: 'https://exrx.net/WeightExercises/Quadriceps/BWStepUp',
		name: 'Step-up',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Gastrocnemius (second leg)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1273',
		url: 'https://exrx.net/WeightExercises/Hamstrings/BWBallStraightHipLegCurl',
		name: 'Straight Hip Leg Curl (on stability ball)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1274',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/Superman',
		name: 'Superman',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Hamstrings']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1275',
		url: 'https://exrx.net/WeightExercises/Other/STAngle',
		name: 'Suspended Angel',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Miscellaneous',
			target: ['Trapezius, Middle', 'Trapezius, Lower', 'Rhomboids'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '1276',
		url: 'https://exrx.net/WeightExercises/Brachialis/STArmCurl',
		name: 'Suspended Arm Curl',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Brachialis',
			target: ['Brachialis'],
			synergists: ['Biceps Brachii', 'Brachioradialis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1277',
		url: 'https://exrx.net/WeightExercises/BackGeneral/STBentKneeInvertedRow',
		name: 'Suspended Bent-knee Inverted Row',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1278',
		url: 'https://exrx.net/WeightExercises/Biceps/STSuspendedBicepsCurl',
		name: 'Suspended Biceps Curl',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Biceps',
			target: ['Biceps Brachii'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1279',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/STChestDip',
		name: 'Suspended Chest Dip',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1280',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/STChestPress',
		name: 'Suspended Chest Press',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '1281',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/STFly',
		name: 'Suspended Fly',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Anterior',
				'Biceps Brachii, Short Head'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1282',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/STSingleLegForwardAngledCalfRaise',
		name: 'Suspended Forward Angled Single Leg Calf Raise',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1283',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/STFrontRaise',
		name: 'Suspended Front Raise',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1284',
		url: 'https://exrx.net/WeightExercises/Hamstrings/STHamstringRunner',
		name: 'Suspended Hamstring Runner',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1285',
		url: 'https://exrx.net/WeightExercises/Hamstrings/STHangingLegCurl',
		name: 'Suspended Hanging Leg Curl',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1286',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/STHangingLegHipRaise',
		name: 'Suspended Hanging Leg Hip Raise',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1287',
		url: 'https://exrx.net/WeightExercises/Hamstrings/STHangingStraightHipLegCurl',
		name: 'Suspended Hanging Straight Hip Leg Curl',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1288',
		url: 'https://exrx.net/WeightExercises/HipAbductor/STHipAbduction',
		name: 'Suspended Hip Abduction',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Abductors (listed below)'],
			synergists: ['Tensor Fasciae Latae', 'Gluteus Medius', 'Gluteus Minimus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1289',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/STHipBridge',
		name: 'Suspended Hip Bridge',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1290',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/STHyperextension',
		name: 'Suspended Hyperextension',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Hamstrings', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1291',
		url: 'https://exrx.net/WeightExercises/Hamstrings/STHyperextension',
		name: 'Suspended Hyperextension',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '1292',
		url: 'https://exrx.net/WeightExercises/BackGeneral/STInvertedRow',
		name: 'Suspended Inverted Row',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1293',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/BWInvertedShrugRings',
		name: 'Suspended Inverted Shrug',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1294',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/STJackknife',
		name: 'Suspended Jack-knife',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Obliques',
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1295',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/STJackknifePike',
		name: 'Suspended Jack-knife Pike',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Obliques',
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1296',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/STRollout',
		name: 'Suspended Kneeling Rollout',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Abs',
			target: [],
			synergists: [
				'Latissimus Dorsi',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Deltoid, Posterior',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1297',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/STNeckLateralFlexion',
		name: 'Suspended Lateral Neck Flexion',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1298',
		url: 'https://exrx.net/WeightExercises/Hamstrings/STLegCurl',
		name: 'Suspended Leg Curl',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1299',
		url: 'https://exrx.net/WeightExercises/HipFlexors/STMountainClimber',
		name: 'Suspended Mountain Climber',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1300',
		url: 'https://exrx.net/WeightExercises/Splenius/STNeckExtension',
		name: 'Suspended Neck Extension',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: ['Trapezius, Upper', 'Levator Scapulae', 'Sternocleidomastoid, Posterior Fibers']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1301',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/STNeckFlexion',
		name: 'Suspended Neck Flexion',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1302',
		url: 'https://exrx.net/WeightExercises/BackGeneral/STOneArmInvertedRow',
		name: 'Suspended One Arm Inverted Row',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1303',
		url: 'https://exrx.net/WeightExercises/BackGeneral/STOneArmRow',
		name: 'Suspended One Arm Row',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1304',
		url: 'https://exrx.net/WeightExercises/Obliques/STPendulum',
		name: 'Suspended Pendulum',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: [],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1305',
		url: 'https://exrx.net/WeightExercises/HipFlexors/STPike',
		name: 'Suspended Pike',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Rectus Femoris'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1306',
		url: 'https://exrx.net/WeightExercises/DeltoidAnterior/STPikePress',
		name: 'Suspended Pike Press',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Front Delt',
			target: ['Deltoid, Anterior'],
			synergists: [
				'Pectoralis Major, Clavicular',
				'Triceps Brachii',
				'Deltoid, Lateral',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1307',
		url: 'https://exrx.net/WeightExercises/BackGeneral/STPowerPull',
		name: 'Suspended Power Pull',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Obliques',
				'Quadratus Lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1308',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/STPullThrough',
		name: 'Suspended Pull Through',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Obliques',
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Sartorius',
				'Erector Spinae',
				'Gluteus Maximus',
				'Hamstrings'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1309',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/STPullThrough',
		name: 'Suspended Pull Through',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: [
				'Gluteus Maximus',
				'Hamstrings',
				'Rectus Abdominis',
				'Obliques',
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Sartorius'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1310',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/STPullup',
		name: 'Suspended Pull-up',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1311',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/STRearDeltInvertedRow',
		name: 'Suspended Rear Delt Inverted Row',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1312',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/STRearDeltRow',
		name: 'Suspended Rear Delt Row',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Brachialis',
				'Brachioradialis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1313',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/STSquat',
		name: 'Suspended Reclining Squat',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1314',
		url: 'https://exrx.net/WeightExercises/Quadriceps/STSquat',
		name: 'Suspended Reclining Squat',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1315',
		url: 'https://exrx.net/WeightExercises/DeltoidPosterior/STReverseFly',
		name: 'Suspended Reverse Fly',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Rear Delt',
			target: ['Deltoid, Posterior'],
			synergists: [
				'Infraspinatus',
				'Teres Minor',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1316',
		url: 'https://exrx.net/WeightExercises/BackGeneral/STRow',
		name: 'Suspended Row',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1317',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/STSelfAssistedChestDip',
		name: 'Suspended Self-assisted Chest Dip',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1318',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/STSelfAssistedPullup',
		name: 'Suspended Self-assisted Pull-up',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1319',
		url: 'https://exrx.net/WeightExercises/Triceps/STSelfAssistedTricepsDip',
		name: 'Suspended Self-assisted Triceps Dip',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1320',
		url: 'https://exrx.net/WeightExercises/Infraspinatus/STShoulderExternalRotation',
		name: 'Suspended Shoulder External Rotation',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'External Rotators',
			target: ['Infraspinatus'],
			synergists: [
				'Teres Minor',
				'Deltoid, Posterior',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1321',
		url: 'https://exrx.net/WeightExercises/Obliques/STSideBend',
		name: 'Suspended Side Bend',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis',
				'Gluteus Medius',
				'Gluteus Minimus',
				'Tensor Fasciae Latae',
				'Adductors, Hip',
				'Pectineus',
				'Gracilis',
				'Gluteus Maximus, Lower Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1322',
		url: 'https://exrx.net/WeightExercises/Obliques/STSideBridge',
		name: 'Suspended Side Bridge',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Gluteus Medius',
				'Gluteus Minimus',
				'Tensor Fasciae Latae',
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis',
				'Adductors, Hip',
				'Pectineus',
				'Gracilis',
				'Gluteus Maximus, Lower Fibers',
				'Deltoid, Lateral',
				'Supraspinatus',
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Serratus Anterior, Inferior Digitations'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1323',
		url: 'https://exrx.net/WeightExercises/Hamstrings/STSingleLegLegCurl',
		name: 'Suspended Single Leg Curl (leg extended)',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1324',
		url: 'https://exrx.net/WeightExercises/Hamstrings/STSingleLegLegCurlFlexed',
		name: 'Suspended Single Leg Curl (leg flexed)',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1325',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/STSplitSquat',
		name: 'Suspended Single Leg Split Squat',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1326',
		url: 'https://exrx.net/WeightExercises/Quadriceps/STSplitSquat',
		name: 'Suspended Single Leg Split Squat',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1327',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/STSingleLegSplitSquatSelfAss',
		name: 'Suspended Single Leg Split Squat (self-assisted)',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1328',
		url: 'https://exrx.net/WeightExercises/Quadriceps/STSingleLegSplitSquatSelfAss',
		name: 'Suspended Single Leg Split Squat (self-assisted)',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1329',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/STSingleLegSquat',
		name: 'Suspended Single Leg Squat',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1330',
		url: 'https://exrx.net/WeightExercises/Quadriceps/STSingleLegSquat',
		name: 'Suspended Single Leg Squat',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1331',
		url: 'https://exrx.net/WeightExercises/Hamstrings/STSingleLegStraightHipLegCurl',
		name: 'Suspended Single Leg Straight Hip Leg Curl (on bench)',
		equipment: ['Suspension Straps', 'Bench'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1332',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/STStandingRollout',
		name: 'Suspended Standing Rollout',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Abs',
			target: [],
			synergists: [
				'Latissimus Dorsi',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Deltoid, Posterior',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1333',
		url: 'https://exrx.net/WeightExercises/Hamstrings/STStraightHipLegCurl',
		name: 'Suspended Straight Hip Leg Curl',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Sartorius', 'Gracilis', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1334',
		url: 'https://exrx.net/WeightExercises/Triceps/STTriDip',
		name: 'Suspended Triceps Dip',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1335',
		url: 'https://exrx.net/WeightExercises/Triceps/STTricepsExtension',
		name: 'Suspended Triceps Extension',
		equipment: ['Suspension Straps'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1336',
		url: 'https://exrx.net/WeightExercises/Triceps/BWSuspendedTricepsExtension',
		name: 'Suspended Triceps Extension (with rope)',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1337',
		url: 'https://exrx.net/WeightExercises/Obliques/STTwist',
		name: 'Suspended Twist',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: [],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1338',
		url: 'https://exrx.net/WeightExercises/Obliques/STTwistingJackknife',
		name: 'Suspended Twisting Jack-knife',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1339',
		url: 'https://exrx.net/WeightExercises/DeltoidLateral/STYShoulderRaise',
		name: 'Suspended Y Lateral Raise',
		equipment: ['Suspension Straps'],
		force: ['Pull'],
		muscles: {
			category: 'Side Delt',
			target: ['Deltoid, Lateral'],
			synergists: [
				'Deltoid, Anterior',
				'Supraspinatus',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Serratus Anterior, Inferior Digitations',
				'Teres Minor',
				'Infraspinatus'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1340',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/TBDeadlift',
		name: 'Trap Bar Deadlift',
		equipment: ['Trap Bar'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1341',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/TBDeadlift',
		name: 'Trap Bar Deadlift',
		equipment: ['Trap Bar'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: [],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Quadriceps', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1342',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/TBShrug',
		name: 'Trap Bar Shrug',
		equipment: ['Trap Bar'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1343',
		url: 'https://exrx.net/WeightExercises/TrapeziusUpper/SBShrugStand',
		name: 'Trap Bar Shrug (elevated stand)',
		equipment: ['Trap Bar'],
		force: ['Pull'],
		muscles: {
			category: 'Traps',
			target: ['Trapezius, Upper'],
			synergists: ['Trapezius, Middle', 'Levator Scapulae']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1344',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/TBSquat',
		name: 'Trap Bar Squat',
		equipment: ['Trap Bar'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1345',
		url: 'https://exrx.net/WeightExercises/Quadriceps/TBSquat',
		name: 'Trap Bar Squat',
		equipment: ['Trap Bar'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1346',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/TBStiffLegDeadlift',
		name: 'Trap Bar Stiff Leg Deadlift',
		equipment: ['Trap Bar'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Erector Spinae', 'Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Compound'
	},
	{
		id: '1347',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/TBStiffLegDeadlift',
		name: 'Trap Bar Stiff Leg Deadlift',
		equipment: ['Trap Bar'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Hamstrings']
		},
		mechanics: 'Compound'
	},
	{
		id: '1348',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/TBStraightLegDeadlift',
		name: 'Trap Bar Straight Leg Deadlift',
		equipment: ['Trap Bar'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: ['Hamstrings', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1349',
		url: 'https://exrx.net/WeightExercises/Hamstrings/TBStraightLegDeadlift',
		name: 'Trap Bar Straight Leg Deadlift',
		equipment: ['Trap Bar'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Erector Spinae', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1350',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/TBStrBackStiffLegDeadlift',
		name: 'Trap Bar Straight-back Stiff-leg Deadlift',
		equipment: ['Trap Bar'],
		force: ['Pull'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Hamstrings', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1351',
		url: 'https://exrx.net/WeightExercises/Hamstrings/TBStrBackStrLegDeadlift',
		name: 'Trap Bar Straight-back Straight-leg Deadlift',
		equipment: ['Trap Bar'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1352',
		url: 'https://exrx.net/WeightExercises/Triceps/BWTriDip',
		name: 'Triceps Dip',
		equipment: ['Bodyweight'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1353',
		url: 'https://exrx.net/WeightExercises/Triceps/BWTriDipBenchesBentKnees',
		name: 'Triceps Dip (bent knees between benches)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1354',
		url: 'https://exrx.net/WeightExercises/Triceps/BWTriDipBenches',
		name: 'Triceps Dip (between benches)',
		equipment: ['Bodyweight', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1355',
		url: 'https://exrx.net/WeightExercises/Obliques/BWTwistingCrunch',
		name: 'Twisting Crunch',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis', 'Psoas Major']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1356',
		url: 'https://exrx.net/WeightExercises/Obliques/BWTwistingCrunchX',
		name: 'Twisting Crunch (arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis', 'Psoas Major']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1357',
		url: 'https://exrx.net/WeightExercises/Obliques/BWTwistingBallCrunch',
		name: 'Twisting Crunch (on stability ball)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1358',
		url: 'https://exrx.net/WeightExercises/Obliques/BWTwistingSitUp',
		name: 'Twisting Sit-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Rectus Abdominis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1359',
		url: 'https://exrx.net/WeightExercises/Obliques/BWTwistingSitUpX',
		name: 'Twisting Sit-up (arms crossed)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Rectus Abdominis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1360',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWVup',
		name: 'V-up',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1361',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWVerticalLegRaise',
		name: 'Vertical Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1362',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWVerticalLegRaisePB',
		name: 'Vertical Leg Raise (on parallel bars)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1363',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWVerticalLegHipRaise',
		name: 'Vertical Leg-Hip Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1364',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWVerticalLegHipRaiseBosa',
		name: 'Vertical Leg-Hip Raise (Bosu support)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1365',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWVerticalLegHipRaisePB',
		name: 'Vertical Leg-Hip Raise (parallel bars)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1366',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWVerticalStraightLegRaise',
		name: 'Vertical Straight Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1367',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/BWVertStraightLegHipRaisePB',
		name: 'Vertical Straight Leg-Hip Raise (parallel bars)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis',
				'Rectus Femoris',
				'Obliques',
				'Quadriceps'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1368',
		url: 'https://exrx.net/WeightExercises/Obliques/BWHangingVerticalLegRaise',
		name: 'Vertical Twisting Leg Raise',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1369',
		url: 'https://exrx.net/WeightExercises/Obliques/BWHangingVerticalLegRaiseDipBar',
		name: 'Vertical Twisting Leg Raise (on dip bar)',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1370',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/BWWallFrontNeckBridge',
		name: 'Wall Front Neck Bridge',
		equipment: ['Bodyweight'],
		force: ['Push', 'Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: [
				'Splenius',
				'Trapezius, Upper',
				'Levator Scapulae',
				'Erector Spinae, Cervicis & Capitis Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1371',
		url: 'https://exrx.net/WeightExercises/Splenius/BWWallRearNeckBridge',
		name: 'Wall Rear Neck Bridge',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: [
				'Trapezius, Upper',
				'Levator Scapulae',
				'Sternocleidomastoid, Posterior Fibers',
				'Erector Spinae',
				'Quadriceps'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1372',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/BWWallSideNeckBridge',
		name: 'Wall Side Neck Bridge',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1373',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/Wt45BackExtension',
		name: 'Weighted 45° Back Extension (on hyperextension apparatus)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1374',
		url: 'https://exrx.net/WeightExercises/Hamstrings/WT45HipExtension',
		name: 'Weighted 45° Back Raise (on hyperextension apparatus)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1375',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/Wt45Hyperextension',
		name: 'Weighted 45° Hyperextension',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '1376',
		url: 'https://exrx.net/WeightExercises/Hamstrings/Wt45Hyperextension',
		name: 'Weighted 45° Hyperextension',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Erector Spinae', 'Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1377',
		url: 'https://exrx.net/WeightExercises/Obliques/WT45SideBend',
		name: 'Weighted 45° Side Bend',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1378',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/WtBackExtension',
		name: 'Weighted Back Extension (on hyperextension apparatus)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1379',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/WtBallHyperextension',
		name: 'Weighted Back Extension (on stability ball)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1380',
		url: 'https://exrx.net/WeightExercises/Hamstrings/WTHipExtension',
		name: 'Weighted Back Raise (on hyperextension apparatus)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1381',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/WtSquat',
		name: 'Weighted Belt Squat',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1382',
		url: 'https://exrx.net/WeightExercises/Quadriceps/WtSquat',
		name: 'Weighted Belt Squat',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1383',
		url: 'https://exrx.net/WeightExercises/Triceps/WtBenchDip',
		name: 'Weighted Bench Dip',
		equipment: ['Weights', 'Bench'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1384',
		url: 'https://exrx.net/WeightExercises/Obliques/WtBentKneeLyingTwist',
		name: 'Weighted Bent-knee Lying Twist',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1385',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/WtChestDip',
		name: 'Weighted Chest Dip',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: [
				'Deltoid, Anterior',
				'Triceps Brachii',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi',
				'Teres Major'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1386',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/WtUnderhandChinup',
		name: 'Weighted Chin-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1387',
		url: 'https://exrx.net/WeightExercises/Triceps/WtPushup',
		name: 'Weighted Close Grip Push-up',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: ['Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular', 'Deltoid, Anterior']
		},
		mechanics: 'Compound'
	},
	{
		id: '1388',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtCrunch',
		name: 'Weighted Crunch',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1389',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtBallCrunch',
		name: 'Weighted Crunch (on stability ball)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1390',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtCrunchX',
		name: 'Weighted Crunch (plate on chest)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1391',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtDeclineSitup',
		name: 'Weighted Decline Sit-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1392',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/WTDonkeyCalfRaise',
		name: 'Weighted Donkey Calf Raise',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1393',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/WTFrontSquat',
		name: 'Weighted Front Squat',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1394',
		url: 'https://exrx.net/WeightExercises/Quadriceps/WTFrontSquat',
		name: 'Weighted Front Squat',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus']
		},
		mechanics: 'Compound'
	},
	{
		id: '1395',
		url: 'https://exrx.net/WeightExercises/Hamstrings/WTGluteHamRaise',
		name: 'Weighted Glute-Ham Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: [
				'Gluteus Maximus',
				'Adductor Magnus',
				'Gastrocnemius',
				'Gracilis',
				'Sartorius',
				'Popliteus'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1396',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtHangLegRaise',
		name: 'Weighted Hanging Leg Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1397',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtHangingLegHipRaise',
		name: 'Weighted Hanging Leg-Hip Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1398',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtHangingStraightLegRaise',
		name: 'Weighted Hanging Straight Leg Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1399',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/WTHipThrust',
		name: 'Weighted Hip Thrust',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1400',
		url: 'https://exrx.net/WeightExercises/ErectorSpinae/WtHyperextension',
		name: 'Weighted Hyperextension',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Low Back',
			target: ['Erector Spinae'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '1401',
		url: 'https://exrx.net/WeightExercises/Hamstrings/WtHyperextension',
		name: 'Weighted Hyperextension',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: []
		},
		mechanics: 'Compound'
	},
	{
		id: '1402',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtInclineCrunch',
		name: 'Weighted Incline Crunch',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1403',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtInclineCrunchX',
		name: 'Weighted Incline Crunch (arms crossed)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1404',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtInclineLegRaise',
		name: 'Weighted Incline Leg Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1405',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtInclineLegRaiseArmPads',
		name: 'Weighted Incline Leg Raise (arms on pads)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1406',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtInclineLegHipRaise',
		name: 'Weighted Incline Leg-Hip Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1407',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtInclineSitUp',
		name: 'Weighted Incline Sit-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '1408',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtInclineSitUpX',
		name: 'Weighted Incline Sit-up (arms crossed)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '1409',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtInclineStraightLegRaise',
		name: 'Weighted Incline Straight Leg Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1410',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtInclineStraightLegRaiseArmPads',
		name: 'Weighted Incline Straight Leg Raise (arms on pads)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1411',
		url: 'https://exrx.net/WeightExercises/Obliques/WtInclineTwistingCrunch',
		name: 'Weighted Incline Twisting Crunch (arms crossed)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis', 'Psoas Major']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1412',
		url: 'https://exrx.net/WeightExercises/Obliques/WtInclineTwistingSitUp',
		name: 'Weighted Incline Twisting Sit-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Rectus Abdominis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1413',
		url: 'https://exrx.net/WeightExercises/Obliques/WtInclineTwistingSitUpX',
		name: 'Weighted Incline Twisting Sit-up (arms crossed)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Rectus Abdominis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1414',
		url: 'https://exrx.net/WeightExercises/Hamstrings/WTHamstringRaise',
		name: 'Weighted Inverse Leg Curl',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hamstrings',
			target: ['Hamstrings'],
			synergists: ['Gastrocnemius', 'Gracilis', 'Sartorius', 'Popliteus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1415',
		url: 'https://exrx.net/WeightExercises/BackGeneral/WTSupineRow',
		name: 'Weighted Inverted Row',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Back',
			target: ['Back, General'],
			synergists: [
				'Trapezius, Middle',
				'Trapezius, Lower',
				'Rhomboids',
				'Latissimus Dorsi',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Brachialis',
				'Brachioradialis',
				'Pectoralis Major, Sternal'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1416',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/WtNeckLateralFlex',
		name: 'Weighted Lateral Neck Flexion',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: ['Splenius', 'Erector Spinae', 'Levator Scapulae', 'Trapezius, Upper']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1417',
		url: 'https://exrx.net/WeightExercises/HipAbductor/WtLyingHipAbduction',
		name: 'Weighted Lying Hip Abduction',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Abductors',
			target: ['Hip Abductors (listed below)'],
			synergists: ['Tensor Fasciae Latae', 'Gluteus Medius', 'Gluteus Minimus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1418',
		url: 'https://exrx.net/WeightExercises/HipAdductors/WTLyingHipAdduction',
		name: 'Weighted Lying Hip Adduction',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Adductors',
			target: ['Adductors, Hip'],
			synergists: ['Pectineus', 'Gracilis', 'Gluteus Maximus, Lower Fibers']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1419',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtLyingLegRaise',
		name: 'Weighted Lying Leg Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1420',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtLegHipRaise',
		name: 'Weighted Lying Leg-Hip Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1421',
		url: 'https://exrx.net/WeightExercises/Splenius/WtLyingNeckExtension',
		name: 'Weighted Lying Neck Extension',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: [
				'Trapezius, Upper',
				'Levator Scapulae',
				'Erector Spinae, Cervicis & Capitis Fibers',
				'Sternocleidomastoid, Posterior Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1422',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/WtLyingNeckFlexion',
		name: 'Weighted Lying Neck Flexion',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1423',
		url: 'https://exrx.net/WeightExercises/Obliques/WtLyingTwist',
		name: 'Weighted Lying Twist',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1424',
		url: 'https://exrx.net/WeightExercises/Splenius/WtNeckExtension',
		name: 'Weighted Neck Extension',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: [
				'Trapezius, Upper',
				'Levator Scapulae',
				'Erector Spinae, Cervicis & Capitis Fibers',
				'Sternocleidomastoid, Posterior Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1425',
		url: 'https://exrx.net/WeightExercises/Sternocleidomastoid/WtNeckFlx',
		name: 'Weighted Neck Flexion',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Neck',
			target: ['Sternocleidomastoid'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1426',
		url: 'https://exrx.net/WeightExercises/Splenius/WtNeckHarnessExt',
		name: 'Weighted Neck Harness Extension',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: [
				'Trapezius, Upper',
				'Levator Scapulae',
				'Erector Spinae, Cervicis & Capitis Fibers',
				'Sternocleidomastoid, Posterior Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1427',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/WtNeutralGripChinup',
		name: 'Weighted Neutral Grip Chin-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1428',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/WtPullupN',
		name: 'Weighted Neutral Grip Pull-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1429',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtOverheadBallCrunch',
		name: 'Weighted Overhead Crunch (on stability ball)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Obliques']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1430',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/WtCloseGripChinup',
		name: 'Weighted Parallel Close Grip Pull-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Teres Major',
				'Deltoid, Posterior',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1431',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/WtPullup',
		name: 'Weighted Pull-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Deltoid, Posterior',
				'Infraspinatus',
				'Teres Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Trapezius, Middle',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1432',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/WtPullupOpen',
		name: 'Weighted Pull-up (open-centered bar)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1433',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/WtPushup',
		name: 'Weighted Push-up',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '1434',
		url: 'https://exrx.net/WeightExercises/PectoralSternal/WtPushupHandles',
		name: 'Weighted Push-up (on handles)',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Chest',
			target: ['Pectoralis Major, Sternal'],
			synergists: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii']
		},
		mechanics: 'Compound'
	},
	{
		id: '1435',
		url: 'https://exrx.net/WeightExercises/LatissimusDorsi/WtRearPullup',
		name: 'Weighted Rear Pull-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Lats',
			target: ['Latissimus Dorsi'],
			synergists: [
				'Brachialis',
				'Brachioradialis',
				'Biceps Brachii',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Trapezius, Lower'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1436',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/WtReverseHyperextension',
		name: 'Weighted Reverse Hyper-extension',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Hamstrings']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1437',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtRomanChairSitup',
		name: 'Weighted Roman Chair Sit-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1438',
		url: 'https://exrx.net/WeightExercises/Obliques/WTRussianTwistBall',
		name: 'Weighted Russian Twist (on stability ball)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Hip External Rotators',
				'Psoas major',
				'Quadratus lumborum',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1439',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtSeatedLegRaise',
		name: 'Weighted Seated Leg Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1440',
		url: 'https://exrx.net/WeightExercises/Splenius/WtNeckExt',
		name: 'Weighted Seated Neck Extension',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Neck Extensors',
			target: ['Splenius'],
			synergists: [
				'Trapezius, Upper',
				'Levator Scapulae',
				'Erector Spinae, Cervicis & Capitis Fibers',
				'Sternocleidomastoid, Posterior Fibers'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1441',
		url: 'https://exrx.net/WeightExercises/Obliques/WTBallSideBend',
		name: 'Weighted Side Bend (on stability ball)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Quadratus lumborum',
				'Psoas major',
				'Iliocastalis lumborum',
				'Iliocastalis thoracis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1442',
		url: 'https://exrx.net/WeightExercises/Obliques/WtSideCrunch',
		name: 'Weighted Side Crunch',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1443',
		url: 'https://exrx.net/WeightExercises/Obliques/WTSideCrunchOnBall',
		name: 'Weighted Side Crunch (on stability ball)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1444',
		url: 'https://exrx.net/WeightExercises/Gastrocnemius/WTSingleLegCalfRaise',
		name: 'Weighted Single Leg Calf Raise',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Calf',
			target: ['Gastrocnemius'],
			synergists: ['Soleus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1445',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/WTSingleLegHipThrustLegExt',
		name: 'Weighted Single Leg Hip Thrust (leg extended)',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Adductor Magnus']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1446',
		url: 'https://exrx.net/WeightExercises/GluteusMaximus/WtSingleLegSquat',
		name: 'Weighted Single Leg Squat',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Glute',
			target: ['Gluteus Maximus'],
			synergists: ['Quadriceps', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1447',
		url: 'https://exrx.net/WeightExercises/Quadriceps/WTSingleLegSquat',
		name: 'Weighted Single Leg Squat',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus', 'Erector Spinae (see notes)']
		},
		mechanics: 'Compound'
	},
	{
		id: '1448',
		url: 'https://exrx.net/WeightExercises/Quadriceps/WTSissySquat',
		name: 'Weighted Sissy Squat',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1449',
		url: 'https://exrx.net/WeightExercises/Quadriceps/WTSissySquatAp',
		name: 'Weighted Sissy Squat (on apparatus)',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Quads',
			target: ['Quadriceps'],
			synergists: []
		},
		mechanics: 'Isolated'
	},
	{
		id: '1450',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtSitUp',
		name: 'Weighted Sit-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '1451',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtSitUpX',
		name: 'Weighted Sit-up (arms crossed)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: ['Iliopsoas', 'Tensor Fasciae Latae', 'Rectus Femoris', 'Sartorius', 'Obliques']
		},
		mechanics: 'Compound'
	},
	{
		id: '1452',
		url: 'https://exrx.net/WeightExercises/Triceps/WtTriDip',
		name: 'Weighted Triceps Dip',
		equipment: ['Weights'],
		force: ['Push'],
		muscles: {
			category: 'Triceps',
			target: ['Triceps Brachii'],
			synergists: [
				'Deltoid, Anterior',
				'Pectoralis Major, Sternal',
				'Pectoralis Major, Clavicular',
				'Pectoralis Minor',
				'Rhomboids',
				'Levator Scapulae',
				'Latissimus Dorsi'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1453',
		url: 'https://exrx.net/WeightExercises/Obliques/WtTwistingCrunch',
		name: 'Weighted Twisting Crunch',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis', 'Psoas major']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1454',
		url: 'https://exrx.net/WeightExercises/Obliques/WtTwistingBallCrunch',
		name: 'Weighted Twisting Crunch (on stability ball)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: ['Rectus Abdominis']
		},
		mechanics: 'Isolated'
	},
	{
		id: '1455',
		url: 'https://exrx.net/WeightExercises/Obliques/WtTwistingSitUp',
		name: 'Weighted Twisting Sit-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Rectus Abdominis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1456',
		url: 'https://exrx.net/WeightExercises/Obliques/WtTwistingSitUpX',
		name: 'Weighted Twisting Sit-up (arms crossed)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Obliques',
			target: ['Obliques'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Sartorius',
				'Rectus Abdominis'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1457',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtVUp',
		name: 'Weighted V-up',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1458',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtVerticalLegRaise',
		name: 'Weighted Vertical Leg Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1459',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtVerticalLegRaisePB',
		name: 'Weighted Vertical Leg Raise (on parallel bars)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1460',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtVerticalLegHipRaise',
		name: 'Weighted Vertical Leg-Hip Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1461',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WTVerticalLegHipRaiseBosa',
		name: 'Weighted Vertical Leg-Hip Raise (Bosu support)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Rectus Femoris',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1462',
		url: 'https://exrx.net/WeightExercises/RectusAbdominis/WtVerticalLegHipRaisePB',
		name: 'Weighted Vertical Leg-Hip Raise (on parallel bars)',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Abs',
			target: ['Rectus Abdominis'],
			synergists: [
				'Iliopsoas',
				'Tensor Fasciae Latae',
				'Pectineus',
				'Sartorius',
				'Adductor Longus',
				'Adductor Brevis',
				'Obliques'
			]
		},
		mechanics: 'Compound'
	},
	{
		id: '1463',
		url: 'https://exrx.net/WeightExercises/HipFlexors/WtVerticalStraightLegRaise',
		name: 'Weighted Vertical Straight Leg Raise',
		equipment: ['Weights'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Rectus Femoris',
				'Adductor Longus',
				'Adductor Brevis'
			]
		},
		mechanics: 'Isolated'
	},
	{
		id: '1464',
		url: 'https://exrx.net/WeightExercises/HipFlexors/BWKneelingWheelRollout',
		name: 'Wheel Rollout',
		equipment: ['Bodyweight'],
		force: ['Pull'],
		muscles: {
			category: 'Hip Flexors',
			target: ['Iliopsoas'],
			synergists: [
				'Tensor Fasciae Latae',
				'Sartorius',
				'Pectineus',
				'Adductor Longus',
				'Adductor Brevis',
				'Latissimus Dorsi',
				'Teres Major',
				'Pectoralis Major, Sternal',
				'Pectoralis Minor',
				'Deltoid, Posterior',
				'Rhomboids'
			]
		},
		mechanics: 'Isolated'
	}
]);

export { Exercises };
