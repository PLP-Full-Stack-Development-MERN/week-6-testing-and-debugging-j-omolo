class BugController {
    constructor(Bug) {
        this.Bug = Bug;
    }

    async createBug(req, res) {
        try {
            const bug = new this.Bug(req.body);
            await bug.save();
            res.status(201).json(bug);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getBugs(req, res) {
        try {
            const bugs = await this.Bug.find();
            res.status(200).json(bugs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateBug(req, res) {
        try {
            const { id } = req.params;
            const updatedBug = await this.Bug.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedBug) {
                return res.status(404).json({ message: 'Bug not found' });
            }
            res.status(200).json(updatedBug);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteBug(req, res) {
        try {
            const { id } = req.params;
            const deletedBug = await this.Bug.findByIdAndDelete(id);
            if (!deletedBug) {
                return res.status(404).json({ message: 'Bug not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default BugController;