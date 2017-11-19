const Router = require('express-promise-router');
const router = new Router();
module.exports = router;
const bodyParser = require('body-parser');
const http = require('http');
const request = require('request');
let data;

const PythonShell = require('python-shell');
const scriptPath = 'ai/test/helloworld.py';

router.get('/article', async (req, res) => {
    const arg = req.query.id;
    const options = {
        mode: 'text',
        /*   pythonPath: 'path/to/python',
        pythonOptions: ['-u'],
        scriptPath: 'path/to/my/scripts', */
        args: [arg]
    };
    const shell = PythonShell.run(scriptPath, options, function (err, results) {
        if (err) throw err;
        res.status(200).json({ message: results });
    });
});

router.get('/connectiontest', async (req, res) => {
    res.status(201).json({ message: 'lmao' });
});