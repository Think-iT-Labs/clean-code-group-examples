@api.route('/albums', methods=['GET'])
class Data(Resource):
    @api.expect(parser)
    @authenticate
    @only_admin
    def get(self):
        pass
