const conexion=require('./conexion');

const getCampaigns=async ()=>{
    const [consulta]=await conexion.
    execute('select * from campaigns');
    return consulta;
};

// metodo para buscar campaña por id
const getCampaignByID = async(id_campaigns) => {
    const[consulta] = await conexion.execute('select * from campaigns where id_campaigns = ?', [id_campaigns]);
    return consulta;
}

// metodo para insertar nuevas campañas
const insertCampaign = async(name_campaigns, description_campaigns, init_date, end_date, campaign_type, campaign_objective, campaign_budget, campaign_status, campaign_metrics, campaign_manager, campaign_misc) => {
    const[consulta] = await conexion.execute(
        'insert into campaigns(name_campaigns, description_campaigns, init_date, end_date, campaign_type, campaign_objective, campaign_budget, campaign_status, campaign_metrics, campaign_manager, campaign_misc) values (?,?,?,?,?,?,?,?,?,?,?)', 
        [name_campaigns, description_campaigns, init_date, end_date, campaign_type, campaign_objective, campaign_budget, campaign_status, campaign_metrics, campaign_manager, campaign_misc]);
    return consulta;
}

// metodo para actualizar una campaña
const updateCampaign = async(id_campaigns, name_campaigns, description_campaigns, init_date, end_date, campaign_type, campaign_objective, campaign_budget, campaign_status, campaign_metrics, campaign_manager, campaign_misc) => {
    try {
        // update operation en la base de datos
        const updatedCampaign = await conexion.execute(id_campaigns, {
            name_campaigns, 
            description_campaigns, 
            init_date, 
            end_date, 
            campaign_type, 
            campaign_objective, 
            campaign_budget, 
            campaign_status, 
            campaign_metrics, 
            campaign_manager, 
            campaign_misc
        }, {new: true});
        return updatedCampaign;
    }
    catch (error) {
        console.error("Error updating campaign:", error);
        return null;
    }
}

// metodo para eliminar un cliente
const deleteCampaign = async(id_campaigns) => {
    try {
        // deletion operation en la base de datos
        const deletedCampaign = await conexion.execute('delete from campaigns where id_campaigns=?)', [id_campaigns]);
        return deletedCampaign;
    }
    catch (error) {
        console.error("Error deleting campaign:", error);
        return null;
    }
}

module.exports={ getCampaigns, getCampaignByID, insertCampaign, updateCampaign, deleteCampaign}