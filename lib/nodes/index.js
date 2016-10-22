module.exports = {

    // expressions

    "IdentifierNode":     require('./expression/IdentifierNode'),

    "NumberNode":         require('./expression/NumberNode'),
    "AdditionNode":       require('./expression/AdditionNode'),
    "MultiplicationNode": require('./expression/MultiplicationNode'),

    "HighByteNode":       require('./expression/HighByteNode'),
    "LowByteNode":        require('./expression/LowByteNode'),

    // emitters

    "OrgNode":            require('./emitter/OrgNode'),
    "LabelNode":          require('./emitter/LabelNode'),

    "DSNode":             require('./emitter/DSNode'),
    "DBNode":             require('./emitter/DBNode'),
    "DWNode":             require('./emitter/DWNode'),
    "StringNode":         require('./emitter/StringNode'),

    "InstructionNode":    require('./emitter/InstructionNode')

};
