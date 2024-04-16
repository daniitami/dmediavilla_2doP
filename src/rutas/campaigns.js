const {Router}=require('express');
const consultas=require('../consultas');
const router=Router();

// ruta para acceder a todas las campañas
router.get('/',async (req, res)=>{
    const consulta = await consultas.getCampaigns();
    return res.status(200).json(consulta);
})


// ruta para acceder al detalle de una campaña
router.get('/:id_campaigns', async (req, res) => {
    const {id_campaigns} = req.params;
    const consulta = await consultas.getCampaignByID(id_campaigns);

    if(consulta.length === 0){
        return res.status(400).json({message: "client not found"});
    }
    return res.status(200).json(consulta);
});

// ruta para agregar una nueva campaña
router.post('/', async (req, res) => {
    const {name_campaigns, description_campaigns, init_date, end_date, campaign_type, campaign_objective, campaign_budget, campaign_status, campaign_metrics, campaign_manager, campaign_misc} = req.body;
    const consulta = await consultas.insertCampaign(name_campaigns, description_campaigns, init_date, end_date, campaign_type, campaign_objective, campaign_budget, campaign_status, campaign_metrics, campaign_manager, campaign_misc);
    return res.status(200).json(consulta);
});

// ruta para actualizar una campaña
router.patch('/:id_campaigns', async (req, res) => {
    const {id_campaigns} = req.params;
    const {name_campaigns, description_campaigns, init_date, end_date, campaign_type, campaign_objective, campaign_budget, campaign_status, campaign_metrics, campaign_manager, campaign_misc} = req.body;

    const updatedCampaign = await consultas.updateCampaign(id_campaigns, name_campaigns, description_campaigns, init_date, end_date, campaign_type, campaign_objective, campaign_budget, campaign_status, campaign_metrics, campaign_manager, campaign_misc);

    if (!updatedCampaign) {
        return res.status(400).json({message: "Client not found"});
    }
    return res.status(200).json(updatedCampaign);
})

// ruta para eliminar una campaña
router.delete('/:id_campaigns', async (req, res) => {
    const {id_campaigns} = req.params;

    const deletedCampaigns = await consultas.deletedCampaigns(id_campaigns);

    if (!deletedCampaigns) {
        return res.status(400).json({message: "Client not found"});
    }
    return res.status(200).end();
});


module.exports = router;