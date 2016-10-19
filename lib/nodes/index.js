module.exports = {
	// expressions
	"AdditionNode":       require('./expression/AdditionNode'),
	"HighByteNode":       require('./expression/HighByteNode'),
	"IdentifierNode":     require('./expression/IdentifierNode'),

	"LowByteNode":        require('./expression/LowByteNode'),
	"MultiplicationNode": require('./expression/MultiplicationNode'),
	"NumberNode":         require('./expression/NumberNode'),
	"StringNode":         require('./expression/StringNode'),

	// emitters
	"DBNode":             require('./emitter/DBNode'),
	"DSNode":             require('./emitter/DSNode'),
	"DWNode":             require('./emitter/DWNode'),
	"InstructionNode":    require('./emitter/InstructionNode'),
	"OrgNode":            require('./emitter/OrgNode'),
};
