
const CustomError = require('../libs/error');
const { listService } = require('../service');

exports.addingtask = async (req, res) => {
    try {
        console.log('req.body: ', req.body.task); 
        const response = await listService.addedtask(req.body.task )
        if (!response)
            throw new CustomError("list not added", 400)
        return res.status(201).json({ message: "success" })
    }
    catch (e) {
      
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}

exports.fetchingtask = async (req, res) => {
    try {
        const response = await listService.fetchedtask();
        if (!response)
            throw new CustomError("No data exist", 400)
        return res.status(201).json(response)
    }
    catch (e) {
        
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}


exports.updatingtask = async (req, res) => {
    try {
    
        const id = req.params.id;
        console.log('params: ', id);
        const data = req.body;
        const response = await listService.updatedtask({id, data})
        console.log('response: ', response);
        if (!response)
            throw new CustomError("item not updated", 400)
        return res.status(201).json(response)
    }
    catch (e) {
        
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}


exports.deletingtask = async (req, res) => {
    try {
        const {params} = req.params;
        const response = await listService.deletedtask(params)
        if (!response)
            throw new CustomError("item not deleted", 400)
        return res.status(201).json(response)
    }
    catch (e) {
        
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}
